import Whitepaper from '@/components/whitepaper'
import WhitepaperErc721 from '@/components/whitepaper/erc-721'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitePaperErc721Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | ERC-721</title>
            </Head>
            <Whitepaper>
                <WhitepaperErc721 />
            </Whitepaper>
        </>
    )
}

export default WhitePaperErc721Page
