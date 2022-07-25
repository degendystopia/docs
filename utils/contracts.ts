import { Signer } from 'ethers'
import { DownBadDoomers, DownBadDoomers__factory } from '../typechain-types'
import type { Provider } from '@ethersproject/providers'

export const HARDHAT_NETWORK = {
    PROVIDER_URL: 'http://127.0.0.1:8545/',
    DOWN_BAD_DOOMERS: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    // metamask info
    CHAIN_NAME: 'Hardhat',
    CHAIN_ID: '0x7A69',
    // CHAIN_ID: '0x539',
    NATIVE_CURRENCY: 'Ether',
    SYMBOL: 'ETH',
}

const addressses = {
    DownBadDoomers: HARDHAT_NETWORK.DOWN_BAD_DOOMERS,
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
        return await this.contract.mintPublic(await this.signerAddr(), quantity)
    }
    async mintWhiteist(nonce, signature) {
        return await this.contract.mintWhitelist(nonce, signature)
    }
    async cost(quantity) {
        return await this.contract.cost(quantity, 0)
    }

    async signerAddr() {
        return await this.contract.signer.getAddress()
    }
}
