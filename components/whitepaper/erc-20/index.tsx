import ListMenu from '@/components/list-menu'
import WhitepaperErc20Gold from './gold'
import WhitepaperErc20Scrap from './scrap'
import Classes from './src/whitepaper-erc721.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitepaperErc20 = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/19.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">ERC-20</h2>
            </div>

            <div className={Classes.section}>
                <p>
                    ERC20 tokens in Degen Dystopia are issued as player rewards
                    and can be used to craft and trade in-game items.
                    <br />
                    <br />
                    When Degen Dystopia launches its Phase 2 (see Roadmap),
                    liquidity pools for its ERC20 tokens will be unlocked with
                    total values equal to the total amount earned by players
                    during Phase 1. This will allow the players to have control
                    over liquidity and reduce the supply available to whales.
                    <br />
                    <br />
                    At the time of launch, Degen Dystopia features 2 ERC20
                    tokens for use in the game. These are DDSCRAP and DDGOLD.
                    View their individual pages for more information about them.
                </p>
            </div>

            <WhitepaperErc20Gold />
            <WhitepaperErc20Scrap />

            <div className={Classes.section}>
                <h2 className="h4">DDSCRAP and DDGOLD allocations</h2>
                <ListMenu
                    buttons={[
                        {
                            name: '50% (5,000,000 DDSCRAP / 500,000 DDGOLD) to player rewards.',
                        },
                        {
                            name: '15% (1,500,000 DDSCRAP / 150,000 DDGOLD) distributed to the team.',
                        },
                        {
                            name: '25% (2,500,000 / DDSCRAP / 250,000 DDGOLD) for marketing, airdrops, bounties, and giveaways.',
                        },
                        {
                            name: '10% (1,000,000 DDSCRAP / 100,000 DDGOLD) for liquidity.',
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default WhitepaperErc20
