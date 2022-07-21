import Classes from './src/whitelist-form.module.scss'
import Container from '@/components/container'
import Title from '../title'
import Button from '../button'
import React, { FormEventHandler, useEffect } from 'react'

import { ethers } from 'ethers'
import { Socket, io } from 'socket.io-client'
import { WhitelistData } from 'pages/api/whitelist'
import { useFloating } from '@floating-ui/react-dom'

/**
 * WhitelistForm component
 */
const WhitelistForm = () => {
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
        timesClicked: 0,
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

        switch (formState.timesClicked) {
            case 0:
                setInfoText('come on...', 0xffffff)
                break
            case 1:
                setInfoText('submitting...', 0xffffff)
                break
            case 2:
                setInfoText('really submitting this time. promise.', 0xffffff)
                break
            default:
                setInfoText('you broke it.', 0xffffff)
                break
        }

        if (!formState.submitted) {
            conn.socket.emit('waitlist', data, (err: string) => {
                if (err) {
                    setInfoText(err, 0xff0000)
                } else {
                    setFormState({
                        submitted: true,
                        timesClicked: formState.timesClicked + 1,
                    })
                    setInfoText('hmm. maybe that worked?', 0xffffff)
                }
            })
        } else {
            setFormState({
                submitted: true,
                timesClicked: formState.timesClicked + 1,
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

    return (
        <Container>
            <div className={Classes.wrapper}>
                <div className={Classes.root}>
                    {formState.timesClicked > 3 ? (
                        <OhShitWhatHappenedToTheForm />
                    ) : (
                        <IHopeTheWhiteListIsOpen
                            submitForm={submitForm}
                            timesClicked={formState.timesClicked}
                        />
                    )}
                </div>
            </div>
        </Container>
    )
}

export default WhitelistForm

function OhShitWhatHappenedToTheForm(props) {
    return (
        <Container>
            <div className={Classes.underconstruction} />
            <div className={Classes.wrapper}>
                <div className={Classes.root}>
                    {/* <div className={Classes.section}></div>
                     */}

                    <div className={Classes.section}></div>
                    <div className={Classes.section}></div>
                    <div className={Classes.section}></div>
                    <div className={Classes.section}></div>
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
                    <Title variant="light" name="𝓌ₕₐₜ ₜₕₑ ₕₑₗₗ ᵢₛ ₜₕᵢₛ?" align="center" />
                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <iframe
                                src="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/edition-drop.html?contract=0x79858dB84396cCcE5FFD870a68226Fe6854DfC17&chainId=1&tokenId=0"
                                width="600px"
                                height="600px"
                            ></iframe>
                        </div>

                        <div>
                            <div className={Classes.image}>
                                <div className={Classes.wlticket} />
                            </div>
                            <h2>
                                looks like now you need to{' '}
                                <span className="text-primary">mint a whitelist pass</span>.
                            </h2>
                            <p>
                                ʟᴜᴄᴋʏ ᴍᴇ, ᴛʜᴇ ᴘᴀssᴇs ᴀʀᴇɴ&apos;ᴛ ᴍɪɴᴛᴇᴅ ᴏᴜᴛ ʏᴇᴛ. Lᴏᴏᴋs ʟɪᴋᴇ
                                ᴛʜᴇʏ&apos;ʀᴇ ғʀᴇᴇ (ᴏᴛʜᴇʀ ᴛʜᴀɴ ɢᴀs).{' '}
                            </p>
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
                        {props.timesClicked > 0 ? (
                            <div
                                ref={floating}
                                style={{
                                    position: strategy,
                                    left: (x ?? 0) - Math.random() * 140 * props.timesClicked,
                                    top: (y ?? 0) - Math.random() * 100 * props.timesClicked,
                                }}
                            >
                                <Button
                                    name="submit"
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
