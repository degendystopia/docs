import Classes from './src/home-features.module.scss'
import Container from '@/components/container'
import Title from '@/components/title'
import ListMenu from '@/components/list-menu'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Features component
 */
const HomeFeatures = ({}: Props) => {
    return (
        <Container>
            <div className={Classes.wrapper}>
                <div className={Classes.root}>
                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    I was up all night{' '}
                                    <span className="text-primary">watching the charts</span> again.
                                </h2>
                                <p>ɪ sᴛᴀʀᴛᴇᴅ ʙᴜʏɪɴɢ ᴄʀʏᴘᴛᴏ ɪɴ 2021.</p>
                            </div>
                        </div>

                        <div className={Classes.image}>
                            <div className={Classes.ragethoughts} />
                            <div className={Classes.binance} />
                            <div className={Classes.hoodiejak} />
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <div className={Classes.mcdonalds} />
                        </div>
                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    We were supposed to
                                    <span className="text-primary"> make it</span>.
                                </h2>
                                <p>ɴᴏᴡ ɪ ɴᴇᴇᴅ ᴛᴏ ᴍᴀᴋᴇ ɪᴛ ᴀʟʟ ʙᴀᴄᴋ.</p>
                            </div>
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    Lucky for me, I found a{' '}
                                    <span className="text-primary">sure thing</span>.
                                </h2>
                                <p>(ɴғᴀ)</p>
                            </div>
                        </div>

                        <div className={Classes.image}>
                            <div className={Classes.animejak} />
                            <div className={Classes.hiddendegen} />

                            {/* <img
                                src="/images/burneddownbadr2.png"
                                // className={Classes.dao}
                                alt="coins"
                            /> */}
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <div className={Classes.doomers} />
                        </div>

                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    ...an <span className="text-primary">nft collection</span>.
                                </h2>
                                <p>
                                    ɪ ʜᴀᴠᴇ ɴᴇᴠᴇʀ sᴇᴇɴ ᴀʀᴛᴡᴏʀᴋ ᴛʜɪs ɢᴏᴏᴅ ʙᴇғᴏʀᴇ ɪɴ ᴍʏ ʟɪғᴇ. ᴀɴᴅ ɪ
                                    ʀᴇᴀᴅ ᴛʜᴀᴛ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ᴀʀᴇ ᴡᴏʀᴋɪɴɢ ᴏɴ ᴀ ᴍᴇᴛᴀᴠᴇʀsᴇ.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    it is definitely not a{' '}
                                    <span className="text-primary">rug pull</span>.
                                </h2>
                                <p>ɪ ᴄᴀɴ&apos;ᴛ ᴡᴀɪᴛ ᴛᴏ ᴘʀᴏᴠᴇ ᴍᴏᴍ ᴀɴᴅ ᴅᴀᴅ ᴡʀᴏɴɢ.</p>
                            </div>
                        </div>
                        <div className={Classes.image}>
                            <div className={Classes.boomer1} />
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <a href="/whitelist">
                                <div className={Classes.waitingmint} />
                            </a>
                        </div>

                        <div className={Classes.content}>
                            <div>
                                <a href="/whitelist">
                                    <h2>
                                        I&apos;m not going to{' '}
                                        <span className="text-primary"> miss this mint</span>.
                                    </h2>
                                </a>
                                <p>
                                    ʏᴏᴜ ᴡᴏᴜʟᴅ ʜᴀᴠᴇ ᴛᴏ ʟɪᴛᴇʀᴀʟʟʏ ᴛᴇᴀʀ ᴍʏ ʙᴏᴅʏ ғʀᴏᴍ ᴛʜɪs ᴄᴏᴍᴘᴜᴛᴇʀ ᴛᴏ
                                    sᴛᴏᴘ ᴍᴇ ғʀᴏᴍ ɢᴇᴛᴛɪɴɢ ɪɴᴛᴏ ᴛʜɪs ᴡʜɪᴛᴇʟɪsᴛ REEEEEEEEEEEEEEEEEEEEE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

// Export component
export default HomeFeatures
