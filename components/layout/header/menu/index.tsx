import Classes from './src/menu.module.scss'
import NavBar from './navbar'
import Button from '@/components/button'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Select from 'react-dropdown-select'
import WalletConnector from '@/components/wallet-connector'

/**
 * Interfaces
 */
interface Buttons {
    name: string
    url: string
}

// Skip typechecking on the window object
declare let window: any

/**
 * Menu component
 */
const Menu = (props) => {
    // local states
    const [auth, setAuth] = useState<boolean>(false)

    // Connect to wallet
    const connect = async () => {
        if (window.ethereum) {
            // A Web3Provider wraps a standard Web3 provider, which is
            // what MetaMask injects as window.ethereum into each page
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            // MetaMask requires requesting permission to connect users accounts
            await provider.send('eth_requestAccounts', [])

            // Set auth to true
            setAuth(true)
        }
    }

    useEffect(() => {
        //
    }, [])

    // Buttons array
    const buttons: Buttons[] = [
        {
            name: 'home',
            url: '/',
        },
        {
            name: 'whitelist',
            url: '/whitelist',
        },
        {
            name: 'mint',
            url: '/mint',
        },
        {
            name: 'burn',
            url: '/burn',
        },
    ]

    return (
        <div className={Classes.root}>
            <NavBar buttons={buttons} />

            {/* TODO chain select <div className={Classes.wallet}>
                <ChainSelect setChain={props.setChain} />
            </div> */}

            <div className={Classes.wallet}>
                <WalletConnector>
                    <Link href="/account">
                        <a>
                            <Button
                                name="My Account"
                                variant="light"
                                icon={<img src="/images/heart.png" alt="heart" />}
                            />
                        </a>
                    </Link>
                </WalletConnector>

                {/* {auth ? (
                    <Link href="/account">
                        <a>
                            <Button
                                name="My Account"
                                variant="light"
                                icon={<img src="/images/heart.png" alt="heart" />}
                            />
                        </a>
                    </Link>
                ) : (

                    <Button
                        name="Connect Wallet"
                        variant="light"
                        icon={<img src="/images/heart.png" alt="heart" />}
                        onClick={connect}
                    />
                )} */}
            </div>
        </div>
    )
}

export default Menu
export const ChainSelect = ({ setChain }) => (
    <div className={Classes.chainSelect}>
        <Select
            options={['ETH', 'SOL']}
            values={['ETH']}
            onChange={setChain}
            placeholder="Select Chain"
            className={Classes.chainSelect}
        />
    </div>
)
