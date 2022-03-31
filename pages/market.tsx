import Market from '@/components/market'
import type { NextPage } from 'next'
import Head from 'next/head'

const MarketPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Market | Degen Dystopia</title>
                <meta property="og:title" content="Market | Degen Dystopia" />
                <meta
                    property="og:url"
                    content="https://degendystopia.world/market"
                />
            </Head>
            <Market />
        </>
    )
}

export default MarketPage
