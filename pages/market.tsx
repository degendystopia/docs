import Market from '@/components/market'
import type { NextPage } from 'next'
import Head from 'next/head'

const MarketPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | Market</title>
            </Head>
            <Market />
        </>
    )
}

export default MarketPage
