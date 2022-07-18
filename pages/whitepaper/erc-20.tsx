import Whitepaper from '@/components/whitepaper'
import WhitePaperErc20 from '@/components/whitepaper/erc-20'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperErc20Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>ERC-20 | Degen Dystopia</title>
                <meta property="og:title" content="ERC-20 | Degen Dystopia" />
                <meta property="og:url" content="https://doomers.wtf/whitepaper/erc-20" />
            </Head>
            <Whitepaper>
                <WhitePaperErc20 />
            </Whitepaper>
        </>
    )
}

export default WhitepaperErc20Page
