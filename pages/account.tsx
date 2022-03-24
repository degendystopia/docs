import Account from '@/components/account'
import type { NextPage } from 'next'
import Head from 'next/head'

const AccountPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | Account</title>
            </Head>
            <Account />
        </>
    )
}

export default AccountPage
