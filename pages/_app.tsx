import { Web3Provider } from '@ethersproject/providers'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import '@/styles/global.scss'
import Head from 'next/head'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'

function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

function Web3Context({ children }) {
    return <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://doomers.wtf/images/wagmi.jpg" />
            </Head>
            <Web3Context>
                <Component {...pageProps} />
            </Web3Context>
        </Layout>
    )
}

export default MyApp
