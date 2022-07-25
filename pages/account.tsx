import Account from '@/components/account'
import ComingSoon from '@/components/coming-soon'
import type { NextPage } from 'next'
import Head from 'next/head'

const AccountPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>account | down bad doomers</title>
                <meta property="og:title" content="account | down bad doomers" />
                <meta property="og:url" content="https://doomers.wtf/account" />
                <meta property="og:image" content="https://doomers.wtf/images/wagmi.jpg" />
            </Head>
            <ComingSoon />
            {/* <Account /> */}
        </>
    )
}

export default AccountPage
