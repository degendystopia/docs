import { CoreV1Api, KubeConfig, V1ConfigMap } from '@kubernetes/client-node'
import { ethers } from 'ethers'

const kc = new KubeConfig()
kc.loadFromDefault()

const k8sApi = kc.makeApiClient(CoreV1Api)

export interface WhitelistData {
    address: string
    twitter: string
    discord: string
    telegram: string
    other: string
}

export class WhitelistStorage {
    configmapName = 'whitelist'
    configmapNamespace = 'doomers'

    async getCurrentWhitelist(): Promise<Map<string, WhitelistData>> {
        const configmap = await this.getConfigMap()
        if (!configmap) {
            return new Map()
        }
        const data = configmap.data
        const whitelist: Map<string, WhitelistData> = new Map()
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const value = data[key]
                const json = JSON.parse(value)
                whitelist.set(key, json)
            }
        }
        return whitelist
    }

    async insertToWhitelist(data: WhitelistData) {
        // validate data
        if (!data.address || !ethers.utils.isAddress(data.address)) {
            return 'Invalid address'
        }
        // validate social contact
        if (!data.twitter && !data.discord && !data.telegram && !data.other) {
            return 'No social contact provided'
        }
        const whitelist = await this.getCurrentWhitelist()
        if (whitelist.has(data.address)) {
            return 'Address already whitelisted'
        }
        whitelist.set(data.address, data)
        await this.updateConfigMap(whitelist)
    }

    private async getConfigMap(): Promise<V1ConfigMap | undefined> {
        const resp = await k8sApi.readNamespacedConfigMap(
            this.configmapName,
            this.configmapNamespace,
        )
        if (!resp || resp.response.statusCode !== 200) {
            console.log('Error reading kube configmap: ' + resp.response.statusCode)
            return
        }
        return resp.body
    }

    private async updateConfigMap(whitelist: Map<string, WhitelistData>) {
        const configmap = await this.getConfigMap()
        if (!configmap) {
            console.log('Error getting configmap')
            return
        }
        const data: {
            [key: string]: string
        } = {}
        whitelist.forEach((value, key) => {
            data[key] = JSON.stringify(value)
        })
        configmap.data = data
        const resp = await k8sApi.replaceNamespacedConfigMap(
            this.configmapName,
            this.configmapNamespace,
            configmap,
        )
        if (!resp || resp.response.statusCode >= 300) {
            console.log('Error updating kube configmap: ' + resp.response.statusCode)
            return
        }
        console.log('Configmap updated')
    }
}
