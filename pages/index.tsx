import type { NextPage } from 'next'
import Home from '@/components/home'
import Head from 'next/head'

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>A Post-Apocalyptic Metaverse | Degen Dystopia</title>
                <meta
                    property="og:title"
                    content="Degen Dystopia | A Post-Apocalyptic Metaverse"
                />
                <meta property="og:url" content="https://degendystopia.world" />
            </Head>
            <Home />
        </>
    )
}

export default HomePage
