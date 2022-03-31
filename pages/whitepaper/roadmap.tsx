import Whitepaper from '@/components/whitepaper'
import WhitePaperRoadmap from '@/components/whitepaper/roadmap'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperRoadmapPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Roadmap | Degen Dystopia</title>
                <meta property="og:title" content="Roadmap | Degen Dystopia" />
                <meta
                    property="og:url"
                    content="https://degendystopia.world/whitepaper/roadmap"
                />
            </Head>
            <Whitepaper>
                <WhitePaperRoadmap />
            </Whitepaper>
        </>
    )
}

export default WhitepaperRoadmapPage
