import Whitepaper from '@/components/whitepaper'
import WhitepaperGettingStarted from '@/components/whitepaper/getting-started'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperGettingStartedPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | Getting Started</title>
            </Head>
            <Whitepaper>
                <WhitepaperGettingStarted />
            </Whitepaper>
        </>
    )
}

export default WhitepaperGettingStartedPage
