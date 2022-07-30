import { Web3Provider } from '@ethersproject/providers'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Web3Context from '../components/web3-context'
import '@/styles/global.scss'
import Head from 'next/head'

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
