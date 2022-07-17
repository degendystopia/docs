import type { NextPage } from 'next'
import Home from '@/components/home'
import Head from 'next/head'

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>downbad doomers</title>
                <meta property="og:title" content="downbad doomers" />
                <meta property="og:url" content="https://doomers.wtf" />
            </Head>
            <Home />
        </>
    )
}

export default HomePage
