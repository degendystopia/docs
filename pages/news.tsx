import ComingSoon from '@/components/coming-soon'
import type { NextPage } from 'next'
import Head from 'next/head'

const NewsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | News</title>
            </Head>
            <ComingSoon />
        </>
    )
}

export default NewsPage
