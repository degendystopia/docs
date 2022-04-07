import Classes from './src/whitepaper-why-create-degen-dystopia.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitePaperWhyCreateDegenDystopia = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/5.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">Why create Degen Dystopia?</h2>
            </div>

            <div className={Classes.container}>
                <div className={Classes.img}>
                    <img src="/images/logo.png" alt="degen" />
                </div>
                <div className={Classes.text}>
                    <p>
                        Innovation in the gaming industry has slowed to a crawl.
                        The AAA game industry has become well-known for
                        uninspired titles,{' '}
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
                        .
                        <br />
                        <br />
                        Indie games have become infamous for{' '}
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
                        <br />
                        <br />
                        Gamers are filled with nostalgia for the times when
                        amazing video games were plentiful and expectations for
                        new releases were deservedly high. Degen Dystopia
                        original and fun to the gaming community.
                    </p>
                </div>
            </div>

            <div className={Classes.section}>
                <p>
                    Likewise, the crypto &amp; blockchain spaces are filled with
                    disappointing projects that either under-deliver or
                    downright scam people. The well-hyped world of &quot;Crypto
                    Gaming&quot; &amp; &quot;GameFi&quot; are no exception.
                </p>
            </div>

            <div className={Classes.container}>
                <div className={Classes.img}>
                    <img src="/images/coins.png" alt="degen" />
                </div>
                <div className={Classes.text}>
                    <p>
                        At the time of writing, few of the projects claiming to
                        be &quot;crypto games&quot; have actually produced
                        anything resembling a game. Most have are little more
                        than gamified DeFi frontends. The few that do have
                        &quot;games&quot; feel like they were made using
                        Macromedia Flash, yet are somehow selling &quot;plots of
                        land&quot; for 0.5 ETH and up.
                        <br />
                        <br />
                        It seems all anyone talks about these days in regards to
                        crypto and gaming is how much of a &quot;scam&quot; it
                        all is, or at best, how NFTs and crypto are
                        &quot;useless&quot; and &quot;unnecessary&quot; in
                        gaming. <strong>Degen Dystopia</strong> is here to
                        change that.
                        <br />
                        <br />
                        It is time for teams to start delivering tangible
                        products and stop the incessant shilling. The success of
                        the project depends on the quality of the product, not
                        on money raised or momentary hype.
                    </p>
                </div>
            </div>

            <div className={Classes.section}>
                <p>
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
                    The strength of any project depends on the value it delivers
                    to its users. Degen Dystopia will only continue grow its
                    offerings to both players and investors, built on the
                    foundation of a unique game that is actually fun to play.
                </p>
            </div>
        </div>
    )
}

export default WhitePaperWhyCreateDegenDystopia
