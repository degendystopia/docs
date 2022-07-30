import Account from '@/components/account'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

const AccountPage: NextPage = () => {
    const context = useWeb3React<Web3Provider>()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context

    return (
        <>
            <Head>
                <title>account | down bad doomers</title>
                <meta property="og:title" content="account | down bad doomers" />
                <meta property="og:url" content="https://doomers.wtf/account" />
                <meta property="og:image" content="https://doomers.wtf/images/wagmi.jpg" />
            </Head>

            {/* <WalletConnector>
                <Account />
            </WalletConnector> */}
            <Account />
        </>
    )
}

export default AccountPage
