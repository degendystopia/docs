import ListMenu from '@/components/list-menu'
import WhitepaperErc721Degen from './degen'
import WhitepaperErc721Dystopian from './dystopian'
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
const WhitepaperErc721 = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/1.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">NFTs (ERC-721)</h2>
            </div>

            <div className={Classes.section}>
                <p>
                    Degen Dystopia features two types of NFTs: the core DEGEN
                    token and its accompanying DYSTOPIAN token.
                    <br />
                    <br />
                    DEGENs are the playable characters & core NFT of Degen
                    Dysopia. A single DEGEN is the only token required to play
                    the game. DEGENs have skills which can be leveled up by
                    playing the game, increasing their power and market value.
                    <br />
                    <br />
                    DYSTOPIANs are NFTs that can be crafted (minted) using
                    in-game resources collected by DEGENs. DYSTOPIANs serve as
                    the minions of the DEGEN who owns them, providing players
                    support in combat, crafting, resource collection, and other
                    forms of in-game utility.
                </p>
            </div>

            <WhitepaperErc721Degen />
            <WhitepaperErc721Dystopian />
        </div>
    )
}

export default WhitepaperErc721
