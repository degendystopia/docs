import Whitepaper from '@/components/whitepaper'
import WhitePaperLore from '@/components/whitepaper/lore'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperLorePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | Lore</title>
            </Head>
            <Whitepaper>
                <WhitePaperLore />
            </Whitepaper>
        </>
    )
}

export default WhitepaperLorePage
