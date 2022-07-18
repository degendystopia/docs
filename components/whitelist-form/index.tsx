import Classes from './src/whitelist-form.module.scss'
import Container from '@/components/container'
import Title from '../title'
import Button from '../button'
import { useEffect } from 'react'
import io from 'Socket.IO-client'
import { ethers } from 'ethers'
let socket

/**
 * WhitelistForm component
 */
const WhitelistForm = () => {
    useEffect(() => socketInitializer(), [])

    const socketInitializer = () => {
        fetch('/api/socket').then(() => {
            socket = io()

            socket.on('connect', () => {
                console.log('connected')
            })
        })
    }

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
            infoText.innerHTML = text
            infoText.style.color = `rgb(${color})`
        }

        // if addrress is missing or invalid, set infoText to error
        if (!data['address'] || !ethers.utils.isAddress(data['address'])) {
            setInfoText('Invalid address.', 0xff0000)
            return
        }

        // if all of twitter, discord, and telegram are missing, set infoText to error
        if (!data['twitter'] && !data['discord'] && !data['telegram'] && !data['other']) {
            setInfoText('Please enter at least one social media link or contact info.', 0xff0000)
            return
        }

        setInfoText('hope this works...', 0xffffff)
        socket.emit('whitelist', data, (err: string) => {
            if (err) {
                setInfoText(err, 0xff0000)
            } else {
                setInfoText('submitted. good luck bro.', 0xffffff)
            }
        })
        console.log(data)

        // reset form
        form.reset()
    }

    return (
        <Container>
            <div className={Classes.wrapper}>
                <div className={Classes.root}>
                    <Title
                        variant="light"
                        name="I hope the whitelist is still open."
                        align="center"
                    />
                    {/* work */}
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
                                    looks like it's <span className="text-primary">open</span> .
                                </h2>
                                <p>ɪᴛ's ᴘʀᴏʙᴀʙʟʏ ᴛᴏᴏ ʟᴀᴛᴇ.</p>
                            </div>
                        </div>
                        <div className={Classes.image}>
                            <div className={Classes.maniacwojak} />
                        </div>
                    </div>
                    {/* # form */}

                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <div className={Classes.trading} />
                        </div>
                        <div className={Classes.content}>
                            <form id="whitelistForm" onSubmit={submitForm}>
                                <div className={Classes.form}>
                                    <div>
                                        <h2>
                                            ETH Wallet Address
                                            <span className="text-primary">(required)</span>:
                                        </h2>
                                        <input
                                            className="text-secondary"
                                            type="text"
                                            name="address"
                                        />
                                    </div>
                                    <div>
                                        <p id="info-text">+ at least one contact:</p>
                                        <h2>Twitter:</h2>
                                        <input
                                            className="text-secondary"
                                            type="text"
                                            name="twitter"
                                        />
                                    </div>
                                    <div>
                                        <h2>Discord:</h2>
                                        <input
                                            className="text-secondary"
                                            type="text"
                                            name="discord"
                                        />
                                    </div>
                                    <div>
                                        <h2>Telegram:</h2>
                                        <input
                                            className="text-secondary"
                                            type="text"
                                            name="telegram"
                                        />
                                    </div>
                                    <div>
                                        <h2>Other:</h2>
                                        <input
                                            className="text-secondary"
                                            type="text"
                                            name="other"
                                        />
                                    </div>
                                </div>
                                <div className={Classes.formGroup}>
                                    <Button
                                        name="submit"
                                        variant="light"
                                        icon={<img src="/images/heart.png" alt="heart" />}
                                        // onClick={submitForm}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default WhitelistForm
