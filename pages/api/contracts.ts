import { ethers, Wallet } from 'ethers'
import Contracts, { NETWORK } from 'utils/contracts'

const provider = ethers.getDefaultProvider(NETWORK.PROVIDER_URL)

const wallet = new Wallet(
    process.env.PRIVATE_KEY,
    // '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    provider,
)

const contracts = new Contracts(wallet)

export class ServerContracts {
    contracts = contracts
    async getSignedNonce(whitelistedAddr: string) {
        // const nonce = await provider.getTransactionCount(whitelistedAddr, 'latest')
        const nonce = 1
        const wlHash = await contracts.doomers.contract.getHashToSign(whitelistedAddr, nonce)
        const wlSignature = await wallet.signMessage(ethers.utils.arrayify(wlHash))
        return { nonce, wlSignature }
    }
}
