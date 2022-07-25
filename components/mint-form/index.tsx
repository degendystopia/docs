import Classes from './src/mint.module.scss'
import Container from '@/components/container'
import Title from '../title'
import Button from '../button'
import React, { FormEventHandler, useEffect, useState } from 'react'
import Contracts from '../../utils/contracts'

import { ethers } from 'ethers'
import { Socket, io } from 'socket.io-client'
import { WhitelistData } from 'pages/api/whitelistStorage'
import { useFloating } from '@floating-ui/react-dom'
// Skip typechecking on the window object
declare let window: any
/**
 * MintForm component
 */
const MintForm = () => {
    const [contracts, setContracts] = useState<Contracts>(null)
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
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        // Request permissions to connect to user account
        await provider.send('eth_requestAccounts', [])

        // Define signer
        const signer = provider.getSigner()

        // Get the connected user address
        const userAddress = await signer.getAddress()

        // If address is null in state
        if (!contracts) {
            // Store the user address in state
            setContracts(new Contracts(signer))
        }
        console.log('connected')
    }

    useEffect(() => {
        connectContracts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contracts])

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
                    const tx = await contracts.doomers.mintWhiteist(nonce, signature)
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

            {/* intro */}
            <MintPanic
                mintPublic={mintPublic}
                mintWhitelist={mintWhitelist}
                totalMinted={totalMinted}
                quantity={quantity}
                setQuantity={setQuantity}
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

function MintPanic({ mintPublic, mintWhitelist, totalMinted, quantity, setQuantity }) {
    return (
        <div className={Classes.wrapper}>
            <div className={Classes.root}>
                <div className={Classes.mintpanic} />
                <div className={Classes.section}>
                    <div className={Classes.content}>
                        <div>
                            <h1>
                                <span className="text-primary">ₒₕ ₛₕᵢₜ..</span>
                            </h1>
                            <h2>
                                <span className="text-primary">ᵢₜ&apos;ₛ ₕₑᵣₑ</span>
                            </h2>
                            <p>(ₜₕₑ ₘᵢₙₜ).</p>
                        </div>
                    </div>
                    <div className={Classes.content}>
                        <div>
                            <h2>
                                <span className="text-primary"> there&apos;s still time</span>.
                            </h2>
                            <p>{totalMinted}/1050 minted so far.</p>
                        </div>
                    </div>
                </div>
                <div className={Classes.section}>
                    <div className={Classes.content}>
                        <form id="mint-form" onSubmit={mintPublic}>
                            <h2>
                                <span id="info-text" className="text-primary">
                                    here it comes
                                </span>
                                .
                            </h2>

                            <div>
                                <h2>
                                    Quantity (up to 10):
                                    <span className="text-primary">(required)</span>:
                                </h2>
                                <input
                                    className="text-secondary"
                                    type="number"
                                    name="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                                />
                            </div>

                            <Button
                                name="public mint: 0.05ETH"
                                type="submit"
                                variant="light"
                                icon={<img src="/images/heart.png" alt="public mint" />}
                            />

                            <Button
                                name="whitelist mint: FREE"
                                variant="light"
                                icon={<img src="/images/heart.png" alt="whitelist mint" />}
                                onClick={mintWhitelist}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const oldform = () => {
    // set up socketio
    useEffect(() => socketInitializer(), [])

    const [conn, setConn] = React.useState({
        socket: null as Socket | undefined,
    })

    const socketInitializer = () => {
        if (!conn.socket) {
            fetch('/api/socket').then(() => {
                const socket = io()
                setConn({
                    socket: socket,
                })
            })
        }
    }

    // set up form state
    const [formState, setFormState] = React.useState({
        submitted: false,
        clicked: false,
    })

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value
        }

        const setInfoText = async (text: string, color: number) => {
            const infoText = document.getElementById('info-text')
            if (!infoText) {
                return
            }
            infoText.innerHTML = text
            infoText.style.color = `rgb(${color})`
        }

        // if addrress is missing or invalid, set infoText to error
        if (!data['address'] || !ethers.utils.isAddress(data['address'])) {
            setInfoText('Invalid address.', 0xff0000)
            return
        }

        // if all of twitter, discord, and telegram are missing, set infoText to error
        if (!data['note']) {
            setInfoText(`Well don't just leave it blank.`, 0xff0000)
            return
        }

        setInfoText('come on 🤞 ...', 0xffffff)

        if (!formState.submitted) {
            setFormState({
                submitted: false,
                clicked: true,
            })
            conn.socket.emit('waitlist', data, (err: string) => {
                if (err) {
                    setInfoText(err, 0xff0000)
                } else {
                    setInfoText('hmm. maybe that worked?', 0xffffff)
                    setTimeout(() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                        setFormState({
                            submitted: true,
                            clicked: true,
                        })
                    }, 3000)
                }
            })
        } else {
            setInfoText('best we can do now is wait.', 0xffffff)
            setFormState({
                submitted: true,
                clicked: true,
            })
        }

        setInfoText('come on...', 0xffffff)

        // handleFormSubmit(data) TODO

        conn.socket.emit('waitlist', data, (err: string) => {
            if (err) {
                setInfoText(err, 0xff0000)
            } else {
            }
        })
        console.log(data)

        // reset form
        // form.reset()
    }
    useEffect(() => {
        if (formState.submitted) {
            // 👇️ scroll to top on page load
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
    }, [])

    return (
        <Container>
            <div className={Classes.wrapper}>
                <div className={Classes.root}>
                    {formState.submitted ? (
                        <OhShitWhatHappenedToTheForm />
                    ) : (
                        <IHopeTheWhiteListIsOpen
                            clicked={formState.clicked}
                            submitForm={submitForm}
                        />
                    )}
                </div>
            </div>
        </Container>
    )
}

function OhShitWhatHappenedToTheForm() {
    return (
        <Container>
            {/* <div className={Classes.underconstruction} /> */}
            <div className={Classes.wrapper}>
                <div className={Classes.root}>
                    {/* <div className={Classes.section}></div>
                     */}

                    <Title variant="light-shake" name="𝓌ₕₐₜ ₜₕₑ ₕₑₗₗ ᵢₛ ₜₕᵢₛ?" align="center" />
                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    i knew it.{' '}
                                    <span className="text-primary">i&apos;m too late</span>.
                                </h2>
                                <p>ᵢ ₙₑᵥₑᵣ ₘₐₖₑ ᵢₜ.</p>
                            </div>
                        </div>
                        <div className={Classes.image}>
                            <div className={Classes.suicide} />
                        </div>
                    </div>
                    <Title
                        variant="light"
                        extraClass="light-text"
                        name="ₒₕ 𝓌ₐᵢₜ... ᵢₜ 𝓌ₒᵣₖₑ𝒹?"
                        align="center"
                    />
                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <div className={Classes.wlticket} />
                        </div>
                        <div className={Classes.content}>
                            <h2>
                                i guess i&apos;ve got a{' '}
                                <span className="text-primary">whitelist pass</span>.
                            </h2>
                            <p>ɴᴏᴡ ᴀʟʟ ɪ ɴᴇᴇᴅ ᴛᴏ ᴅᴏ ɪs ɴᴏᴛ ᴍɪss ᴛʜᴇ ᴍɪɴᴛ.</p>
                        </div>
                    </div>

                    {/* <div className={Classes.section}>
                        <div className="phaser-game"></div>
                    </div> */}
                </div>
            </div>
        </Container>
    )
}

function IHopeTheWhiteListIsOpen(props) {
    const { x, y, reference, floating, strategy } = useFloating()

    // You can use Hooks here!
    return (
        <Container>
            <Title variant="light" name="I hope the whitelist is still open." align="center" />
            <div className={Classes.section}>
                <div className={Classes.image}>
                    <div className={Classes.work1} />
                </div>
                <div className={Classes.content}>
                    <div>
                        <h2>
                            <span className="text-primary"> had to stay late</span> at work.
                        </h2>
                        <p>ᴍɪɢʜᴛ ʜᴀᴠᴇ ᴍɪssᴇᴅ ɪᴛ.</p>
                    </div>
                </div>
            </div>

            <div className={Classes.section}>
                <div className={Classes.content}>
                    <div>
                        <h2>
                            i hope it&apos;s <span className="text-primary">open</span>.
                        </h2>
                        <p>ₚₗₑₐₛₑ 𝒹ₒₙ&apos;ₜ ₗₑₜ ᵢₜ ᵦₑ ₜₒₒ ₗₐₜₑ</p>
                    </div>
                </div>
                <div className={Classes.image}>
                    <div className={Classes.maniacwojak} />
                </div>
            </div>

            <div className={Classes.section}>
                <div className={Classes.image}>
                    <div className={Classes.trading} />
                </div>
                <div className={Classes.content}>
                    <form id="whitelist-form" onSubmit={props.submitForm} ref={reference}>
                        <div className={Classes.form}>
                            <div>
                                <h2>
                                    ETH Wallet Address
                                    <span className="text-primary">(required)</span>:
                                </h2>
                                <input className="text-secondary" type="text" name="address" />
                            </div>
                            <div>
                                <p id="info-text">+ anything u want to add, contact info, etc:</p>
                                <h2>Note:</h2>
                                <input className="text-secondary" type="text" name="note" />
                            </div>
                        </div>
                        {props.clicked ? (
                            <div
                                ref={floating}
                                style={{
                                    position: strategy,
                                    // left: (x ?? 0) - Math.random() * 240 * 2,
                                    // top: (y ?? 0) - Math.random() * 200 * 2,
                                }}
                            >
                                <Button
                                    name="submit"
                                    effect="rotate"
                                    variant="light"
                                    type="submit"
                                    icon={<img src="/images/heart.png" alt="heart" />}
                                />
                            </div>
                        ) : (
                            <Button
                                name="submit"
                                variant="light"
                                type="submit"
                                icon={<img src="/images/heart.png" alt="heart" />}
                            />
                        )}
                    </form>
                </div>
            </div>
        </Container>
    )
}

// const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const form = e.currentTarget
//     const formData = new FormData(form)
//     const data = {}
//     for (const [key, value] of formData.entries()) {
//         data[key] = value
//     }

//     const setInfoText = async (text: string, color: number) => {
//         const infoText = document.getElementById('info-text')
//         infoText.innerHTML = text
//         infoText.style.color = `rgb(${color})`
//     }

//     // if addrress is missing or invalid, set infoText to error
//     if (!data['address'] || !ethers.utils.isAddress(data['address'])) {
//         setInfoText('Invalid address.', 0xff0000)
//         return
//     }

//     // if all of twitter, discord, and telegram are missing, set infoText to error
//     if (!data['note'] && !data['discord'] && !data['telegram'] && !data['other']) {
//         setInfoText(`Well don't just leave it blank.`, 0xff0000)
//         return
//     }

//     setInfoText('come on...', 0xffffff)

//     // handleFormSubmit(data) TODO

//     conn.socket.emit('waitlist', data, (err: string) => {
//         if (err) {
//             setInfoText(err, 0xff0000)
//         } else {
//             setInfoText('', 0xffffff)
//         }
//     })
//     console.log(data)

//     // reset form
//     form.reset()
// }
