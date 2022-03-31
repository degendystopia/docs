import ComingSoon from '@/components/coming-soon'
import type { NextPage } from 'next'
import Head from 'next/head'

const NewsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>News | Degen Dystopia</title>
                <meta property="og:title" content="News | Degen Dystopia" />
                <meta
                    property="og:url"
                    content="https://degendystopia.world/news"
                />
            </Head>
            <ComingSoon />
        </>
    )
}

export default NewsPage
