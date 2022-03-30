import Classes from './src/whitepaper-overview.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitePaperOverview = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/1.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">Degen Dystopia</h2>
            </div>

            <img
                className={Classes.img}
                src="/images/degen-dystopia.png"
                alt="Degen Dystopia"
            />

            <div className={Classes.section}>
                <small>
                    Ravaged landscapes stretch out in all directions. Burned-out
                    buildings loom ominously over the alleys of abandoned
                    cities. Corroded droids hunt down travelers foolish enough
                    to wander through their domains. Survivors of long-forgotten
                    wars scavenge together what little they can in the hopes of
                    forging a new life in this desolate world. Welcome to the
                    wasteland. Welcome to Degen Dystopia.
                </small>
            </div>

            <div className={Classes.section}>
                <div className={Classes.title}>
                    <img
                        className={Classes.degen}
                        src="/images/degens/1.png"
                        alt="Degen Dystopia"
                    />
                    <h2 className="h4">What is Degen Dystopia?</h2>
                </div>
                <p>
                    <strong>Degen Dystopia</strong> is a post-apocalyptic,
                    browser-based{' '}
                    <a href="https://en.wikipedia.org/wiki/Massively_multiplayer_online_role-playing_game">
                        <strong className="text-blue">MMORPG</strong>
                    </a>{' '}
                    in which the players control their own in-game economy built
                    on the Avalanche blockchain.
                    <br />
                    <br />
                    The game consists of an <strong>Open-World</strong> 2D map
                    in which players can explore, level up their{' '}
                    <strong>NFT characters</strong>,{' '}
                    <strong className="text-purple">collect resources</strong> (
                    <strong className="text-secondary">ERC-20</strong>), and{' '}
                    <strong className="text-primary">craft items</strong> (
                    <strong className="text-secondary">ERC-721</strong>).
                    <br />
                    <br />
                    Players can{' '}
                    <strong className="text-red">engage in combat</strong> with
                    the inhabitants of the <strong>Degen Dystopia</strong> world
                    (PvE) as well as other players (PvP) in real-time to collect
                    and compete for rewards.
                    <br />
                    <br />
                    <strong className="text-primary">
                        Craftable gear
                    </strong>{' '}
                    gives players an edge in combat and survival, and unlocks
                    new abilities and areas of the map to explore.
                    <br />
                    <br />
                    <strong className="text-purple">
                        Resource collection
                    </strong>{' '}
                    allows players to accumulate ingredients used for crafting,
                    research, combat and other abilties. Crafting resources are
                    implemented as ERC-20 tokens for liquid exchange on
                    decentralized marketplaces and use in other DeFi protocols.
                    <br />
                    <br />
                    <strong>Degen Dystopia</strong> features{' '}
                    <strong className="text-red">Open-PVP Zones</strong>, where
                    players can kill each other and loot each other&rsquo;s
                    pending rewards. Open-PVP areas are restricted to specific
                    zones
                    <strong>rich in token rewards</strong>, leaving plenty of
                    room for casual players to play and earn while incentivizing
                    competition and cooperation at the highest levels of play.
                    <br />
                    <br />
                    The continuous flow between
                    <br />
                    <strong className="text-primary">
                        resource collection
                    </strong>{' '}
                    -&gt; <strong className="text-purple">crafting</strong>{' '}
                    -&gt;
                    <strong className="text-red">combat</strong>
                    <br />
                    incentivizes players to specialize their builds,
                    collaborate, and compete in real-time for wealth and
                    territory in the persistent world of Degen Dystopia.
                </p>
            </div>

            <div className={Classes.section}>
                <div className={Classes.title}>
                    <img
                        className={Classes.degen}
                        src="/images/degens/5.png"
                        alt="Degen Dystopia"
                    />
                    <h2 className="h4">What motivates us?</h2>
                </div>

                <p>
                    Innovation in the gaming industry has slowed to a crawl. The
                    AAA game industry has become well-known for uninspired
                    titles,{' '}
                    <a href="https://www.theguardian.com/games/2020/dec/18/cyberpunk-2077-how-2020s-biggest-video-game-launch-turned-into-a-shambles">
                        <strong className="text-primary">
                            disappointing launches
                        </strong>
                    </a>
                    , and{' '}
                    <a href="http://www.original-gamer.com/index.php?action=article&id=3147">
                        <strong className="text-primary">
                            releasing the same games year after year
                        </strong>
                    </a>
                    . Indie games have become infamous for{' '}
                    <a href="https://www.youtube.com/watch?v=wqM6zAGZ4dw">
                        <strong className="text-primary">
                            kickstarter rug-pulls
                        </strong>
                    </a>{' '}
                    and early access games that{' '}
                    <a href="https://www.theguardian.com/games/2019/jan/28/steam-early-access-first-wave-games-kenshi-valve">
                        <strong className="text-primary">
                            never get finished.
                        </strong>
                    </a>{' '}
                    Gamers are filled with nostalgia for the times when amazing
                    video games were plentiful and expectations for new releases
                    were deservedly high. Degen Dystopia original and fun to the
                    gaming community.
                    <br />
                    <br />
                    Likewise, the crypto &amp; blockchain spaces are filled with
                    disappointing projects that either under-deliver or
                    downright scam people. The well-hyped world of &quot;Crypto
                    Gaming&quot; &amp; &quot;GameFi&quot; are no exception.
                    <br />
                    <br />
                    At the time of writing, few of the projects claiming to be
                    &quot;crypto games&quot; have actually produced anything
                    resembling a game. Most have are little more than gamified
                    DeFi frontends. The few that do have &quot;games&quot; feel
                    like they were made using Macromedia Flash, yet are somehow
                    selling &quot;plots of land&quot; for 0.5 ETH and up.
                    <br />
                    <br />
                    It seems all anyone talks about these days in regards to
                    crypto and gaming is how much of a &quot;scam&quot; it all
                    is, or at best, how NFTs and crypto are &quot;useless&quot;
                    and &quot;unnecessary&quot; in gaming.{' '}
                    <strong>Degen Dystopia</strong> is here to change that.
                    <br />
                    <br />
                    It is time for teams to start delivering tangible products
                    and stop the incessant shilling. The success of the project
                    depends on the quality of the product, not on money raised
                    or momentary hype.
                    <br />
                    <br />
                    The MMO genre provides the perfect opportunity to build
                    player-run economies. Building sustainable player-run
                    economies is possible, but it hinges on the ability to
                    deliver a compelling experience to players. The project must
                    evolve and grow with time, improving the experience for the
                    players and continuing to innovate itse design. As
                    demonstrated by games such as{' '}
                    <a href="https://mobiledevmemo.com/wp-content/uploads/2021/09/The-In-game-Economics-of-Ultima-Online.pdf">
                        <strong className="text-purple">Ultima Online</strong>
                    </a>
                    , Runescape, and EVE Online, a solid foundation can give
                    rise to epic player-run economies.
                    <br />
                    <br />
                    <strong>Degen Dystopia</strong> is a long-term project with
                    a long-term vision. Development will grow steadily and
                    sustainably, delivering real value progressively, avoiding
                    the classic pump-and-dump mechanics that are all too common
                    in the NFT/crypto space.
                    <br />
                    <br />
                    Through ongoing development, expansion of new features such
                    as crafting, tournaments, betting, rentals system,
                    minigames, partnerships, and much more, Degen Dystopia can
                    continue to find innovate ways to drive revenue and sustain
                    the ever-critical player rewards, attracting both the gamers
                    who want to earn, and the earners who want to game.
                    <br />
                    <br />
                    The strength of any project deoends on the value it delivers
                    to its users. Degen Dystopia will only continue grow its
                    offerings to both players and investors, built on the
                    foundation of a unique game that is actually fun to play.
                </p>
            </div>
        </div>
    )
}

export default WhitePaperOverview
