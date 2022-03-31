import Account from '@/components/account'
import type { NextPage } from 'next'
import Head from 'next/head'

const AccountPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Account | Degen Dystopia</title>
                <meta property="og:title" content="Account | Degen Dystopia" />
                <meta
                    property="og:url"
                    content="https://degendystopia.world/account"
                />
            </Head>
            <Account />
        </>
    )
}

export default AccountPage
