import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import '@/styles/global.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://doomers.wtf/images/wagmi.jpg" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
