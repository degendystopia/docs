import type { NextPage } from 'next'
import Home from '@/components/home'
import Head from 'next/head'

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>lil doomers</title>
                <meta property="og:title" content="lil doomers" />
                <meta property="og:url" content="https://doomers.wtf" />
            </Head>
            <Home />
        </>
    )
}

export default HomePage
