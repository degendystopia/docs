import Classes from './src/mint.module.scss'
import Container from '@/components/container'
import Title from '../title'
import Button from '../button'
import React, { FormEventHandler, useEffect, useState } from 'react'

import { ethers } from 'ethers'
import { Socket, io } from 'socket.io-client'
import { WhitelistData } from 'pages/api/whitelist'
import { useFloating } from '@floating-ui/react-dom'

import mintpanic from '../../public/images/mint-panic.gif'

/**
 * MintForm component
 */
const MintForm = () => {
    const [state, setState] = useState({})
    return (
        <Container>
            {/* intro */}
            <MintPanic totalMinted={0} />

            {/* # whitelisted/150, # minted, public mint, whitelisted mint button, result page  */}

            {/* do the mint */}
            {/* <MintForm /> */}
            {/* show your doomers */}
            {/* <MintResult state={state} /> */}
        </Container>
    )
}

export default MintForm

function MintPanic(props) {
    return (
        <Container>
            <Title variant="dark" name="ₒₕ ₛₕᵢₜ" align="center" />

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

            <div className={Classes.section}>
                <div className={Classes.image}>{mintpanic}</div>
                <div className={Classes.content}>
                    <div>
                        <h2>
                            <span className="text-primary"> there&apos;s still time</span>.
                        </h2>
                        <p>{props.totalMinted}/1050 minted so far.</p>
                    </div>
                </div>
            </div>
        </Container>
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
