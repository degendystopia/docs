import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

export default function Web3Context({ children }) {
    return <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
}
