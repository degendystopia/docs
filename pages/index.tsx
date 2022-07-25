import type { NextPage } from 'next'
import Home from '@/components/home'
import Head from 'next/head'

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>down bad doomers</title>
                <meta property="og:title" content="downbad doomers" />
                <meta property="og:url" content="https://doomers.wtf" />
                <meta property="og:image" content="https://doomers.wtf/images/wagmi.jpg" />
            </Head>
            <Home />
        </>
    )
}

export default HomePage
