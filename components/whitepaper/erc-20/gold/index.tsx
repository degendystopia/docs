import Classes from './src/whitepaper-erc20-gold.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitepaperErc20Gold = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.gold}
                    src="/images/gold.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">DDGOLD</h2>
            </div>

            <p>
                DDGOLD is acquired in Degen Dystopia by mining. Mining is a
                semi-passive activity players can do in Degen Dystopia inside of
                mines and caves.
                <br />
                <br />
                DDGOLD is used to craft and upgrade more powerful Dystopians.
                <br />
                <br />
                DDGOLD will be stakeable in vaults which pay out AVAX over time
                in proportion to Degen Dystopia’s revenue.
            </p>

            <h2 className="h4">Supply</h2>
            <p>
                The DDGOLD token is a fungible token with a fixed supply hard
                cap of 1,000,000.
                <br />
                <br />
                Initially, DDGOLD will begin with 0 circulating supply. The only
                way to obtain DDGOLD will be to play Degen Dystopia with a DEGEN
                and earn by using the DEGEN&apos;s mining ability. Mining skill
                can be buffed by arming your DEGEN with certain DYSTOPIANs.
                <br />
                <br />
                In Phase 2 of the Degen Dystopia roadmap, liquidity pools will
                be unlocked allowing players and speculators to trade DDGOLD on
                the open market.
                <br />
                <br />
                Every DEGEN starts the game with 1 DDGOLD in their inventory.
            </p>
        </div>
    )
}

export default WhitepaperErc20Gold
