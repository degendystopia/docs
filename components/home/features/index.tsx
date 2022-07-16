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
                                    my portfolio is <span className="text-primary">going down</span>
                                    .
                                </h2>
                            </div>
                        </div>

                        <div className={Classes.image}>
                            <div className={Classes.trading} />
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <div className={Classes.doomers} />
                        </div>

                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    But my <span className="text-primary">nft collection</span> is
                                    growing every day.
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    I'm not going to be stuck at this job{' '}
                                    <span className="text-primary">forever.</span>
                                </h2>
                                <p>ᵢ'ₘ 𝓰ₒₙₙₐ ₘₐₖₑ ᵢₜ</p>
                            </div>
                        </div>

                        <div className={Classes.image}>
                            <div className={Classes.mcdonalds} />
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <div className={Classes.boomer1} />
                        </div>

                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    <span className="text-primary">This time</span> will be
                                    different.
                                </h2>
                                <p>
                                    ᴍᴏᴍ ᴀɴᴅ ᴅᴀᴅ ᴀʀᴇ ɢᴏɪɴɢ ʙᴇ sʜᴏᴄᴋᴇᴅ ᴡʜᴇɴ ɪ ᴍᴀᴋᴇ ɪᴛ ʙɪɢ ғʀᴏᴍ
                                    ᴄʀʏᴘᴛᴏᴄᴜʀʀᴇɴᴄʏ.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    This one is the real <span className="text-primary">100x</span>
                                </h2>
                                <p>
                                    ᴡʜᴇɴ ᴛʜᴇ ᴍᴀʀᴋᴇᴛ ʙᴏᴜɴᴄᴇs, ᴍʏ ɴғᴛ ᴄᴏʟʟᴇᴄᴛɪᴏɴ ɪs ɢᴏɪɴɢ ᴛᴏ ᴍᴀᴋᴇ ᴍᴇ
                                    ʀɪᴄʜ.
                                </p>
                            </div>
                        </div>

                        <div className={Classes.image}>
                            <div className={Classes.animejak} />
                            {/* <img
                                src="/images/burnedsmolr2.png"
                                // className={Classes.dao}
                                alt="coins"
                            /> */}
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <div className={Classes.waitingmint} />
                        </div>

                        <div className={Classes.content}>
                            <div>
                                <h2>
                                    I'm not going to{' '}
                                    <span className="text-primary"> to miss this mint</span>.
                                </h2>
                                <p>
                                    ɪ'ᴍ ᴊᴜsᴛ ɢᴏɴɴᴀ sɪᴛ ʜᴇʀᴇ ʀᴇғʀᴇsʜɪɴɢ ᴛʜᴇ ᴘᴀɢᴇ ᴜɴᴛɪʟ ᴛʜᴇ ᴍɪɴᴛ ᴅᴀᴛᴇ
                                    ɪs ᴀɴɴᴏᴜɴᴄᴇᴅ.
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
