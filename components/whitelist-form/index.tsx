import Classes from './src/whitelist-form.module.scss'
import Container from '@/components/container'
import Title from '../title'
import Button from '../button'

/**
 * WhitelistForm component
 */
const WhitelistForm = () => {
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
                                <p>ᴍɪɢʜᴛ ʜᴀᴠᴇ ᴍɪssᴇᴅ ᴛʜᴇ ɪᴛ.</p>
                            </div>
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    looks like it's <span className="text-primary">open</span> .
                                </h2>
                                <p>ᴛʜᴇʀᴇ's sᴛɪʟʟ ʜᴏᴘᴇ.</p>
                            </div>
                        </div>
                        <div className={Classes.image}>
                            <div className={Classes.maniacwojak} />
                        </div>
                    </div>
                    {/* # form */}

                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    Address<span className="text-primary">(required)</span>:
                                </h2>
                                <input className="text-secondary" type="text" name="address" />
                            </div>
                            <div>
                                <p>and at least one of:</p>
                                <h2>Twitter:</h2>
                                <input className="text-secondary" type="text" name="twitter" />
                            </div>
                            <div>
                                <h2>Discord:</h2>
                                <input className="text-secondary" type="text" name="discord" />
                            </div>
                            <div>
                                <h2>Note:</h2>
                                <input className="text-secondary" type="text" name="note" />
                            </div>
                        </div>
                        <div className={Classes.image}>
                            <div className={Classes.maniacwojak} />
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <Button
                            name="submit"
                            variant="light"
                            icon={<img src="/images/heart.png" alt="heart" />}
                            // onClick={connect}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default WhitelistForm
