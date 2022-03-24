import Classes from './src/menu.module.scss'
import NavBar from './navbar'
import Button from '@/components/button'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import Link from 'next/link'

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
const Menu = () => {
    // local states
    const [auth, setAuth] = useState<boolean>(false)

    // Connect to wallet
    const connect = async () => {
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        // MetaMask requires requesting permission to connect users accounts
        await provider.send('eth_requestAccounts', [])

        // Set auth to true
        setAuth(true)
    }

    useEffect(() => {
        // If ethereum exists in the window object
        if (window.ethereum) {
            // Initialize ethers.js
            //const provider = new ethers.providers.Web3Provider(window.ethereum)
            // Ask User permission to connect to Metamask
            connect()
        }
    }, [])

    // Buttons array
    const buttons: Buttons[] = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Play',
            url: '/play',
        },
        {
            name: 'News',
            url: '/news',
        },
        {
            name: 'Whitepaper',
            url: '/whitepaper',
        },
        {
            name: 'Market',
            url: '/market',
        },
    ]

    return (
        <div className={Classes.root}>
            <NavBar buttons={buttons} />

            <div className={Classes.wallet}>
                {auth ? (
                    <Link href="/account">
                        <a>
                            <Button
                                name="My Account"
                                variant="light"
                                icon={
                                    <img src="/images/heart.png" alt="heart" />
                                }
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
                )}
            </div>
        </div>
    )
}

export default Menu
