import { ethers, Wallet } from 'ethers'
import Contracts, { NETWORK } from 'utils/contracts'

const provider = ethers.getDefaultProvider(NETWORK.PROVIDER_URL)

const wallet = new Wallet(
    // process.env.PRIVATE_KEY,
    '8068fe2d49dba4fbf9babe39be5a90cf86a18af3e51df0a5e8974c642c74286a',
    provider,
)

const contracts = new Contracts(wallet)

export class ServerContracts {
    contracts = contracts
    async getSignedNonce(whitelistedAddr: string) {
        // const nonce = await provider.getTransactionCount(whitelistedAddr, 'latest')
        const nonce = 2
        const wlHash = await contracts.doomers.contract.getHashToSign(whitelistedAddr, nonce)
        const wlSignature = await wallet.signMessage(ethers.utils.arrayify(wlHash))
        return { nonce, wlSignature }
    }
}
