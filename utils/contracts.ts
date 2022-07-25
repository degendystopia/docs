import { Signer } from 'ethers'
import { DownBadDoomers, DownBadDoomers__factory } from '../typechain-types'
import type { Provider } from '@ethersproject/providers'

const HARDHAT_NETWORK = {
    PROVIDER_URL: 'http://127.0.0.1:8545/',
    DOWN_BAD_DOOMERS: '0x9E545E3C0baAB3E08CdfD552C960A1050f373042',
    // metamask info
    CHAIN_NAME: 'Hardhat',
    CHAIN_ID: '0x7A69',
    // CHAIN_ID: '0x539',
    NATIVE_CURRENCY: 'Ether',
    SYMBOL: 'ETH',
}

const RINKEBY_NETWORK = {
    PROVIDER_URL: 'https://eth-rinkeby.alchemyapi.io/v2/dc00YrlYJaJXqpiwHwOnm40W9wwB6UQ3',
    DOWN_BAD_DOOMERS: '0x69a3739A52223c4A8654F66Ed9ba85BF3EFffcf2',
    // metamask info
    CHAIN_NAME: 'Rinkeby',
    CHAIN_ID: '0x04',
    NATIVE_CURRENCY: 'Ether',
    SYMBOL: 'ETH',
}

// export const NETWORK = HARDHAT_NETWORK
export const NETWORK = RINKEBY_NETWORK

const addressses = {
    DownBadDoomers: NETWORK.DOWN_BAD_DOOMERS,
}

export default class Contracts {
    doomers: DownBadDoomersContract
    signer: Signer
    constructor(signer: Signer) {
        this.signer = signer
        this.doomers = new DownBadDoomersContract(addressses.DownBadDoomers, signer)
    }
}

class DownBadDoomersContract {
    contract: DownBadDoomers
    constructor(address: string, signer: Signer) {
        this.contract = DownBadDoomers__factory.connect(address, signer)
    }
    async mintPublic(quantity) {
        return await this.contract.mintPublic(await this.signerAddr(), quantity, {
            value: await this.cost(quantity),
        })
    }
    async mintWhitelist(nonce, signature) {
        return await this.contract.mintWhitelist(nonce, signature)
    }

    async cost(quantity) {
        return await this.contract.cost(quantity, 0)
    }

    async signerAddr() {
        return await this.contract.signer.getAddress()
    }
}
