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
                        <div className={Classes.image}>
                            <div className={Classes.degens} />
                        </div>

                        <div className={Classes.content}>
                            <ListMenu
                                buttons={[
                                    {
                                        name: 'EXPLORE',
                                    },
                                    {
                                        name: 'HARVEST (TOKENS)',
                                    },
                                    {
                                        name: 'CRAFT & COLLECT (NFTS)',
                                    },
                                    {
                                        name: 'FIGHT TO THE DEATH',
                                    },
                                    {
                                        name: 'OWN THE FUTURE',
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h4>
                                    Explore an{' '}
                                    <span className="text-primary">
                                        Open World
                                    </span>
                                </h4>
                                <p>
                                    Meet other players, harvest resources, craft
                                    equipment, forage for collectables, battle
                                    in open-world PVP
                                </p>
                            </div>

                            <div>
                                <h4>
                                    <span className="text-primary">
                                        Level-Up
                                    </span>{' '}
                                    your NFTs
                                </h4>
                                <p>
                                    Degens, the playable characters of Degen
                                    Dystopia are NFTs that can be leveled up by
                                    playing the game.
                                </p>
                            </div>
                        </div>

                        <div className={Classes.image}>
                            <div className={Classes.world} />
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <img
                                src="/images/coins.png"
                                className={Classes.coins}
                                alt="coins"
                            />
                        </div>

                        <div className={Classes.content}>
                            <div>
                                <h4>
                                    <span className="text-primary">Play</span>{' '}
                                    to Earn
                                </h4>
                                <p>
                                    Degen Dystopia is built for the players.
                                    This means maximum accessibility:
                                    browser-based, mobile-friendly, low-cost of
                                    entry, and play-to-earn mechanics.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={Classes.section}>
                        <div className={Classes.content}>
                            <div>
                                <h4>
                                    Open Governance{' '}
                                    <span className="text-primary">DAO</span>
                                </h4>
                                <p>
                                    Degen Dystopia is designed to be governed
                                    via DAO mechanics. Unlike other games, the
                                    players will choose the way the game
                                    evolves, both from within the game, as well
                                    as by the ability to propose and vote on
                                    changes to Degen Dystopia itself.
                                </p>
                            </div>
                        </div>

                        <div className={Classes.image}>
                            <img
                                src="/images/scroll.png"
                                className={Classes.dao}
                                alt="coins"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

// Export component
export default HomeFeatures
