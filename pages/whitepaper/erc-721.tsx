import Whitepaper from '@/components/whitepaper'
import WhitepaperErc721 from '@/components/whitepaper/erc-721'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitePaperErc721Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>ERC-721 | Degen Dystopia</title>
                <meta property="og:title" content="ERC-721 | Degen Dystopia" />
                <meta property="og:url" content="https://doomers.wtf/whitepaper/erc-721" />
            </Head>
            <Whitepaper>
                <WhitepaperErc721 />
            </Whitepaper>
        </>
    )
}

export default WhitePaperErc721Page
