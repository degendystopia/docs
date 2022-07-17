import ComingSoon from '@/components/coming-soon'
import WhitelistForm from '@/components/whitelist-form'
import type { NextPage } from 'next'
import Head from 'next/head'

const MintPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mint | downbad doomers</title>
                <meta property="og:title" content="Mint | downbad doomers" />
                <meta property="og:url" content="https://degendystopia.world/mint" />
            </Head>
            <WhitelistForm />
        </>
    )
}

export default MintPage
