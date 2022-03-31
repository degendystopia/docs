import Classes from './src/whitepaper-what-is-degen-dystopia.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitePaperWhatIsDegenDystopia = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/1.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">What is Degen Dystopia?</h2>
            </div>

            <div className={Classes.container}>
                <div className={Classes.img}>
                    <img src="/images/world.png" alt="degen" />
                </div>
                <div className={Classes.text}>
                    <p>
                        <strong>Degen Dystopia</strong> is a post-apocalyptic,
                        browser-based{' '}
                        <a href="https://en.wikipedia.org/wiki/Massively_multiplayer_online_role-playing_game">
                            <strong className="text-blue">MMORPG</strong>
                        </a>{' '}
                        in which the players control their own in-game economy
                        built on the Avalanche blockchain.
                        <br />
                        <br />
                        The game consists of an <strong>Open-World</strong> 2D
                        map in which players can explore, level up their{' '}
                        <strong>NFT characters</strong>,{' '}
                        <strong className="text-purple">
                            collect resources
                        </strong>{' '}
                        (<strong className="text-secondary">ERC-20</strong>),
                        and{' '}
                        <strong className="text-primary">craft items</strong> (
                        <strong className="text-secondary">ERC-721</strong>).
                    </p>
                </div>
            </div>

            <div className={Classes.section}>
                <p>
                    Players can{' '}
                    <strong className="text-red">engage in combat</strong> with
                    the inhabitants of the <strong>Degen Dystopia</strong> world
                    (PvE) as well as other players (PvP) in real-time to collect
                    and compete for rewards.
                </p>
            </div>

            <div className={Classes.container}>
                <div className={Classes.img}>
                    <img src="/images/icons/gear.png" alt="degen" />
                    <img src="/images/icons/ingredient-1.png" alt="degen" />
                    <img src="/images/icons/rock.png" alt="degen" />
                </div>

                <div className={Classes.text}>
                    <p>
                        <strong className="text-primary">Craftable gear</strong>{' '}
                        gives players an edge in combat and survival, and
                        unlocks new abilities and areas of the map to explore.
                        <br />
                        <br />
                        <strong className="text-purple">
                            Resource collection
                        </strong>{' '}
                        allows players to accumulate ingredients used for
                        crafting, research, combat and other abilties.
                        <br />
                        <br />
                        Crafting resources are implemented as{' '}
                        <strong>ERC-20 tokens</strong> for liquid exchange on
                        decentralized marketplaces and use in other DeFi
                        protocols.
                    </p>
                </div>
            </div>

            <div className={Classes.section}>
                <p>
                    <strong>Degen Dystopia</strong> features{' '}
                    <strong className="text-red">Open-PVP Zones</strong>, where
                    players can kill each other and loot each other&rsquo;s
                    pending rewards. Open-PVP areas are restricted to specific
                    zones <strong>rich in token rewards</strong>, leaving plenty
                    of room for casual players to play and earn while
                    incentivizing competition and cooperation at the highest
                    levels of play.
                    <br />
                    <br />
                    The continuous flow between:
                </p>

                <div className={Classes.section}>
                    <p className="text-center">
                        <strong className="text-primary">
                            resource collection
                        </strong>{' '}
                        <span className={Classes.arrow}>-&gt;</span>{' '}
                        <strong className="text-purple">crafting</strong>{' '}
                        <span className={Classes.arrow}>-&gt;</span>{' '}
                        <strong className="text-red">combat</strong>
                    </p>
                </div>

                <p>
                    incentivizes players to specialize their builds,
                    collaborate, and compete in real-time for wealth and
                    territory in the persistent world of Degen Dystopia.
                </p>
            </div>
        </div>
    )
}

export default WhitePaperWhatIsDegenDystopia
