import Whitepaper from '@/components/whitepaper'
import WhitePaperErc20 from '@/components/whitepaper/erc-20'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperErc20Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | ERC-20</title>
            </Head>
            <Whitepaper>
                <WhitePaperErc20 />
            </Whitepaper>
        </>
    )
}

export default WhitepaperErc20Page
