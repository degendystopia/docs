import Classes from './src/mint.module.scss'
import Container from '@/components/container'
import Title from '../title'
import Button from '../button'
import React, { FormEventHandler, useEffect, useState } from 'react'
import Contracts, { NETWORK } from '../../utils/contracts'

import { ethers } from 'ethers'
import { Socket, io } from 'socket.io-client'
import { WhitelistData } from 'pages/api/whitelistStorage'
import { useFloating } from '@floating-ui/react-dom'
import useInterval from 'utils/interval'
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
    useEffect(() => conectSocket(), [])

    // connect to the contracts
    const connectContracts = async () => {
        // Create a new ethers.js instance
        const provider = new ethers.providers.Web3Provider(window.ethereum, {
            name: 'localhost',
            chainId: Number(NETWORK.CHAIN_ID),
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
    }

    useEffect(() => {
        connectContracts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contracts])

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

                setInfoText('minted from WL! well played, anon.')
            },
        )
    }

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
                    </div>
                </div>
            </div>
            {/* intro */}
            <MintPanic
                mintPublic={mintPublic}
                mintWhitelist={mintWhitelist}
                totalMinted={totalMinted}
                quantity={quantity}
                setQuantity={setQuantity}
                userAddress={userAddress}
            />

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
                                    Connected with {userAddress}
                                </span>
                                .
                            </h2>

                            <div className="vertical-center">
                                <h2>
                                    Quantity <span className="text-primary">(max 10)</span>:
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
                                                    name="public mint: 0.05ETH"
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
                                                    name="whitelist mint: FREE"
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
    )
}
