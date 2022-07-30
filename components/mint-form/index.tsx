import Classes from './src/mint.module.scss'
import Container from '@/components/container'
import Title from '../title'
import Button from '../button'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { Web3Provider } from '@ethersproject/providers'

import { ethers } from 'ethers'
import { Socket, io } from 'socket.io-client'

import useInterval from 'utils/interval'
import Contracts, { NETWORK } from 'utils/contracts'

// import WalletConnectProvider from '@walletconnect/web3-provider'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { useWeb3React } from '@web3-react/core'

const RPC_URLS: { [chainId: number]: string } = {
    // 1: 'https://mainnet.infura.io/v3/af8b8dee520a4341a8ac773007ca1216',
}

export const walletconnect = new WalletConnectConnector({
    rpc: RPC_URLS,
    chainId: 1,
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
})

import { providers } from 'ethers'
import Web3Context from '../wallet-connector'
import ConnectButton from '../connect-button'

// Skip typechecking on the window object
declare let window: any
/**
 * MintForm component
 */
const MintForm = () => {
    const [contracts, setContracts] = useState<Contracts>(null)
    const [userAddress, setAddr] = useState<string>('')
    const [quantity, setQuantity] = useState(1) // for public mint
    const [totalMinted, setTotalMinted] = useState(0)
    const [socket, setSocket] = useState<Socket>(undefined)

    const setInfoText = async (text: string) => {
        const infoText = document.getElementById('info-text')
        if (!infoText) {
            return
        }
        infoText.innerHTML = text
    }

    const conectSocket = () => {
        if (!socket) {
            fetch('/api/socket').then(() => {
                setSocket(io())
            })
        }
    }
    useEffect(() => conectSocket())

    // connect to the contracts
    // const connectContracts = async () => {
    //     //  Create WalletConnect Provider
    //     // const mobileCheck = function () {
    //     //     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    //     //         navigator.userAgent,
    //     //     )
    //     // }
    //     if (contracts) {
    //         return
    //     }

    //     let provider: providers.Web3Provider
    //     if (!window.ethereum) {
    //         const context = useWeb3React<ethers.providers.Web3Provider>()
    //         const { connector, library, chainId, account, activate, deactivate, active, error } =
    //             context

    //         provider = library

    //         // console.log('mobile')
    //         // const walletConnect = new WalletConnectProvider({
    //         //     rpc: 'https://mainnet.infura.io/v3/af8b8dee520a4341a8ac773007ca1216',
    //         // })
    //         // //  Wrap with Web3Provider from ethers.js
    //         // provider = new providers.Web3Provider(walletConnect)
    //         // //  Enable session (triggers QR Code modal)
    //         // await walletConnect.enable()
    //     } else {
    //         // Create a new ethers.js instance
    //         provider = new ethers.providers.Web3Provider(window.ethereum, {
    //             name: NETWORK.CHAIN_NAME,
    //             chainId: Number(NETWORK.CHAIN_ID),
    //         })
    //     }

    //     // Subscribe to accounts change
    //     provider.on('accountsChanged', (accounts: string[]) => {
    //         console.log(accounts)
    //     })

    //     // Subscribe to chainId change
    //     provider.on('chainChanged', (chainId: number) => {
    //         console.log(chainId)
    //     })

    //     // Subscribe to session disconnection
    //     provider.on('disconnect', (code: number, reason: string) => {
    //         console.log(code, reason)
    //     })

    //     // Request permissions to connect to user account
    //     await provider.send('eth_requestAccounts', [])

    //     // Define signer
    //     const signer = provider.getSigner()

    //     const network = await provider.detectNetwork()

    //     if (network.chainId != Number(NETWORK.CHAIN_ID)) {
    //         setInfoText(
    //             `change network to ${NETWORK.CHAIN_NAME} ${network.chainId} ${Number(
    //                 NETWORK.CHAIN_ID,
    //             )}`,
    //         )

    //         await (provider.provider as any).request({
    //             method: 'wallet_switchEthereumChain',
    //             params: [{ chainId: NETWORK.CHAIN_ID }],
    //         })
    //         return
    //     }

    //     // If address is null in state
    //     if (!contracts) {
    //         // Store the user address in state
    //         setContracts(new Contracts(signer))
    //         setAddr(await signer.getAddress())
    //     }
    //     console.log('connected')
    // }

    const { library } = useWeb3React<Web3Provider>()

    const connectContractsV2 = async () => {
        if (!library) {
            console.log('no library')
            return
        }
        console.log('library')
        const provider = library

        // Subscribe to accounts change
        provider.on('accountsChanged', (accounts: string[]) => {
            console.log(accounts)
        })

        // Subscribe to chainId change
        provider.on('chainChanged', (chainId: number) => {
            console.log(chainId)
        })

        // Subscribe to session disconnection
        provider.on('disconnect', (code: number, reason: string) => {
            console.log(code, reason)
        })

        // Request permissions to connect to user account
        await provider.send('eth_requestAccounts', [])

        // Define signer
        const signer = provider.getSigner()

        const network = await provider.detectNetwork()

        if (network.chainId != Number(NETWORK.CHAIN_ID)) {
            setInfoText(
                `change network to ${NETWORK.CHAIN_NAME} ${network.chainId} ${Number(
                    NETWORK.CHAIN_ID,
                )}`,
            )

            await (provider.provider as any).request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: NETWORK.CHAIN_ID }],
            })
            return
        }

        // If address is null in state
        if (!contracts) {
            // Store the user address in state
            setContracts(new Contracts(signer))
            setAddr(await signer.getAddress())
        }
        console.log('connected')

        // Store the user address in state
        setContracts(new Contracts(signer))
        setAddr(await signer.getAddress())
    }

    useEffect(() => {
        connectContractsV2()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [library])

    const getTotalMinted = async () => {
        if (!contracts) {
            return
        }
        const totalMinted = await contracts.doomers.contract.totalSupply()
        setTotalMinted(totalMinted.toNumber())
    }

    useEffect(() => {
        getTotalMinted()
    })
    useInterval(() => {
        getTotalMinted()
    }, 2000)

    const mintPublic = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!contracts) {
            setInfoText('connecting to "The Blockchain"...')
            return
        }
        setInfoText('minting...')
        try {
            const tx = await contracts.doomers.mintPublic(quantity)
            console.log(tx)
            const receipt = await tx.wait()
        } catch (e) {
            console.log(e)
            setInfoText('error minting')
            return
        }

        setInfoText("🎉 it's your  lucky day, anon! 🎉")
    }

    const mintWhitelist = async () => {
        if (!contracts) {
            setInfoText('still connecting to "The Blockchain"...')
            return
        }
        if (!socket) {
            setInfoText('connecting to the "decentralized" whitelist...')
            return
        }
        const address = await contracts.signer.getAddress()
        setInfoText("let's see if u got the WL, anon!")
        socket.emit(
            'redeem-whitelist',
            address,
            async (err: string, nonce: number, signature: string) => {
                if (err) {
                    setInfoText(err)
                    return
                }
                setInfoText("congats! you made the WL. now let's see if you already claimed it.")
                try {
                    const tx = await contracts.doomers.mintWhitelist(nonce, signature)
                    console.log(tx)
                    const receipt = await tx.wait()
                } catch (e) {
                    console.log(e)
                    setInfoText('error minting')
                    return
                }

                setInfoText('🎉  minted from WL! 🎉  well played, anon.')

                setTimeout(() => {
                    setInfoText('mint again?')
                }, 3000)
            },
        )
    }

    const [isInjected, setIsInjected] = useState(false)
    useEffect(() => {
        if (window.ethereum) {
            console.log('injected')
            setIsInjected(true)
        } else {
            console.log('not gonna injected injected')
        }
    })

    const connectButton = (
        <div className={Classes.root}>
            <div className={Classes.center}>
                <ConnectButton
                    name="Connect Wallet"
                    variant="light"
                    icon="heart"
                    useInjected={isInjected}
                />

                {/* <Button
                    connectButton={(connect) => {
                        return (
                            <Button
                                center={true}
                                name="Connect Wallet"
                                variant="light"
                                icon={<img src="/images/heart.png" alt="heart" />}
                                onClick={connectContracts}
                            />
                        )
                    }}
                >
                    <ComingSoon />
                </WalletConnector> */}
            </div>
        </div>
    )
    return (
        <Container>
            <Title variant="light-shake" name="ₒₕ ₛₕᵢₜ" align="center" />

            <div className={Classes.section}>
                <div className={Classes.image}>
                    <div className={Classes.hereitis} />
                </div>
                <div className={Classes.content}>
                    <div>
                        <h2>
                            <span className="text-shake">ᵢₜ&apos;ₛ ₕₑᵣₑ</span>
                        </h2>
                        <p>(ₜₕₑ ₘᵢₙₜ).</p>
                        {contracts === null && connectButton}
                    </div>
                </div>
            </div>

            {/* intro */}
            {contracts !== null && (
                <MintPanic
                    mintPublic={mintPublic}
                    mintWhitelist={mintWhitelist}
                    totalMinted={totalMinted}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    userAddress={userAddress}
                />
            )}

            {/* # whitelisted/150, # minted, public mint, whitelisted mint button, result page  */}

            {/* do the mint */}
            {/* <MintForm /> */}
            {/* show your doomers */}
            {/* <MintResult state={state} /> */}
        </Container>
    )
}

export default MintForm

function MintPanic({ mintPublic, mintWhitelist, totalMinted, quantity, setQuantity, userAddress }) {
    const mintForm = (
        <div className={Classes.wrapper}>
            <div className={Classes.root}>
                <div className={Classes.section}>
                    <div className={Classes.content}>
                        <form id="mint-form" onSubmit={mintPublic}>
                            <h2>
                                <span id="info-text" className="text-primary">
                                    Connected with{' '}
                                    {`${userAddress.substring(0, 6)}...${userAddress.substring(
                                        userAddress.length - 4,
                                    )}`}
                                </span>
                            </h2>

                            <div className="vertical-center">
                                <h2>
                                    Quantity <span className="text-primary"></span>:
                                </h2>
                                <input
                                    className="text-secondary"
                                    type="number"
                                    name="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                                />

                                <div className={Classes['center']}>
                                    <div className={Classes.section}>
                                        <div className={Classes.content}>
                                            <h2>
                                                <Button
                                                    name="public mint (max 10): 0.05ETH"
                                                    type="submit"
                                                    variant="light"
                                                    icon={
                                                        <img
                                                            src="/images/heart.png"
                                                            alt="public mint"
                                                        />
                                                    }
                                                />
                                            </h2>
                                        </div>
                                        <div className={Classes.content}>
                                            <h2>
                                                <Button
                                                    name="whitelist mint (max 1): FREE"
                                                    variant="light"
                                                    icon={
                                                        <img
                                                            src="/images/heart.png"
                                                            alt="whitelist mint"
                                                        />
                                                    }
                                                    type="button"
                                                    onClick={mintWhitelist}
                                                />
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div className={Classes.wrapper}>
            <div className={Classes.root}>
                <div className={Classes.section}>
                    <div className={Classes.content}>
                        <div className={Classes.content}>
                            <div className={Classes['text-shake']}>
                                {totalMinted < 1050 ? (
                                    <div>
                                        <h2>
                                            <span className="text-primary">
                                                {' '}
                                                there&apos;s still time
                                            </span>
                                            .
                                        </h2>
                                        <p>{totalMinted}/1050 minted so far.</p>
                                        {mintForm}
                                    </div>
                                ) : (
                                    <div>
                                        <div className={Classes.image}>
                                            <div className={Classes.suicide} />
                                        </div>
                                        <h2>
                                            <span className="text-primary">
                                                {' '}
                                                all 1050 minted out! better luck next time, anon
                                            </span>
                                            .
                                        </h2>
                                        <p>better try secondary.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
