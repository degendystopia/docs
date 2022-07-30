import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'

const RPC_URLS: { [chainId: number]: string } = {
    1: 'https://mainnet.infura.io/v3/af8b8dee520a4341a8ac773007ca1216',
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })

export const network = new NetworkConnector({
    urls: { 1: RPC_URLS[1] },
    defaultChainId: 1,
})

export const walletconnect = new WalletConnectConnector({
    rpc: RPC_URLS,
    chainId: 1,
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
})
