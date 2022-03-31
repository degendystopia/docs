import Whitepaper from '@/components/whitepaper'
import WhitePaperLore from '@/components/whitepaper/lore'
import type { NextPage } from 'next'
import Head from 'next/head'

const WhitepaperLorePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Lore | Degen Dystopia</title>
                <meta property="og:title" content="Lore | Degen Dystopia" />
                <meta
                    property="og:url"
                    content="https://degendystopia.world/whitepaper/lore"
                />
            </Head>
            <Whitepaper>
                <WhitePaperLore />
            </Whitepaper>
        </>
    )
}

export default WhitepaperLorePage
