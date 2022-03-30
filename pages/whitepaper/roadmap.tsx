import Whitepaper from '@/components/whitepaper'
import WhitePaperRoadmap from '@/components/whitepaper/roadmap'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperRoadmapPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | Roadmap</title>
            </Head>
            <Whitepaper>
                <WhitePaperRoadmap />
            </Whitepaper>
        </>
    )
}

export default WhitepaperRoadmapPage
