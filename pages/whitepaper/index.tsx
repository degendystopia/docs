import Whitepaper from '@/components/whitepaper'
import WhitePaperOverview from '@/components/whitepaper/overview'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Whitepaper | Degen Dystopia</title>
                <meta
                    property="og:title"
                    content="Whitepaper | Degen Dystopia"
                />
                <meta
                    property="og:url"
                    content="https://docs.degendystopia.world"
                />
            </Head>
            <Whitepaper>
                <WhitePaperOverview />
            </Whitepaper>
        </>
    )
}

export default WhitepaperPage
