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
    timestamp: number
    waitlist: boolean
    ip: string
}

export class WhitelistStorage {
    configmapName = 'whitelist'
    configmapNamespace = 'doomers'
    // 30 second refresh interval
    refreshInterval = 30 * 1000

    cachedConfigMap: V1ConfigMap | undefined
    lastUpdated?: number

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

    // whitelist have no
    async insertToWhitelist(data: WhitelistData) {
        // validate data
        if (!data.address || !ethers.utils.isAddress(data.address)) {
            return 'Invalid address'
        }
        const whitelist = await this.getCurrentWhitelist()
        if (whitelist.has(data.address)) {
            return // no up
        }
        if (whitelist.size >= 200) {
            return 'Whitelist is full'
        }
        data.timestamp = Date.now()
        whitelist.set(data.address, data)
        await this.updateConfigMap(whitelist)
    }

    private async getConfigMap(): Promise<V1ConfigMap | undefined> {
        if (
            this.cachedConfigMap &&
            this.lastUpdated &&
            Date.now() - this.lastUpdated < this.refreshInterval
        ) {
            return this.cachedConfigMap
        }
        const resp = await k8sApi.readNamespacedConfigMap(
            this.configmapName,
            this.configmapNamespace,
        )
        if (!resp || resp.response.statusCode !== 200) {
            console.log('Error reading kube configmap: ' + resp.response.statusCode)
            return
        }
        this.cachedConfigMap = resp.body
        this.lastUpdated = Date.now()
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
            this.cachedConfigMap = undefined // clear cache on an error
            console.log('Error updating kube configmap: ' + resp.response.statusCode)
            return
        }
        this.cachedConfigMap = resp.body
        console.log('Configmap updated')
    }
}
