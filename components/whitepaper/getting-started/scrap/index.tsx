import Classes from './src/whitepaper-erc20-scrap.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitepaperErc20Scrap = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.scrap}
                    src="/images/scrap.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">DDSCRAP</h2>
            </div>

            <p>
                DDSCRAP is required in all crafting recipes, as well as to
                repair Dystopians.
                <br />
                <br />
                DDSCRAP is earned by defeating Dystopians in combat or smelting
                them down (burning the token) for a refund of the crafting
                ingredients.
                <br />
                <br />
                DDSCRAP that is spent on repairs is refunded to the game
                treasury to sustain player rewards.
            </p>

            <h2 className="h4">Supply</h2>
            <p>
                The DDSCRAP token is a fungible token with a fixed supply hard
                cap of 10,000,000.
                <br />
                <br />
                As Degen Dystopia evolves, DDSCRAP will deflationary mechanics,
                including being used crafting & repairing DYSTOPIANs, houses,
                <br />
                <br />
                Initially, DDSCRAP will begin with 0 circulating supply. The
                only way to obtain DDSCRAP will be to play Degen Dystopia with a
                DEGEN and earn by killing Degens.
                <br />
                <br />
                In Phase 2 of the Degen Dystopia roadmap, liquidity pools will
                be unlocked allowing players and speculators to trade DDSCRAP on
                the open market.
            </p>
        </div>
    )
}

export default WhitepaperErc20Scrap
