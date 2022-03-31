import Whitepaper from '@/components/whitepaper'
import WhitepaperGettingStarted from '@/components/whitepaper/getting-started'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperGettingStartedPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Getting Started | Degen Dystopia</title>
                <meta
                    property="og:title"
                    content="Getting Started | Degen Dystopia"
                />
                <meta
                    property="og:url"
                    content="https://degendystopia.world/whitepaper/getting-started"
                />
            </Head>
            <Whitepaper>
                <WhitepaperGettingStarted />
            </Whitepaper>
        </>
    )
}

export default WhitepaperGettingStartedPage
