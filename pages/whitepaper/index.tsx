import Whitepaper from '@/components/whitepaper'
import WhitePaperOverview from '@/components/whitepaper/overview'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | Whitepaper</title>
            </Head>
            <Whitepaper>
                <WhitePaperOverview />
            </Whitepaper>
        </>
    )
}

export default WhitepaperPage
