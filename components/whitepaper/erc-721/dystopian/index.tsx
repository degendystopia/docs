import ListMenu from '@/components/list-menu'
import Classes from './src/whitepaper-erc721-dystopian.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitepaperErc721Dystopian = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/16.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">About DYSTOPIAN</h2>
            </div>
            <p>
                DYSTOPIAN tokens are the primary craftable item in Degen
                Dystopia. Players can craft DYSTOPIANs using resources collected
                in the Degen Dystopia game, or trade them with other players.
                Players with builds specialized for crafting DYSTOPIANs will
                produce the most powerful and cost-effective crafts.
                <br />
                <br />
                Each class of DYSTOPIAN has its own artwork, power level,
                crafting skill requirements (that the DEGEN must possess in
                order to craft), and token ingredients
                <br />
                <br />
                DYSTOPIANs function like robot pets who will fight for the
                player, mine, craft, and provide other forms of utility such as
                healing, resurrection, and fast travel. (that the DEGEN owner
                must spend in order to craft the DYSTOPIAN NFT).
                <br />
                <br />
                Each player can wield up to 4 DYSTOPIANs at a time on their
                DEGEN in-game.
                <br />
                <br />
                DYSTOPIANs can become damaged in combat and require repairs.
                Repairs may require consuming game resources for certain types
                of DYSTOPIANs.
                <br />
                <br />
                DYSTOPIANs level up as they are used, and can be eventually
                upgraded to more powerful versions for additional crafting
                costs.
            </p>

            <h2 className="h4">Supply</h2>
            <p>
                DYSTOPIAN supply is limited by the availability of tokens used
                to craft them. Initially, these tokens will consist of DDSCRAP
                and DDGOLD.
                <br />
                <br />
                New classes of DYSTOPIANS can be introduced later which have
                custom recipes, including ERC20 tokens that are not native to
                Degen Dystopia. This can be used to generate player rewards in
                the form of any supported AVAX-based tokens.
                <br />
                <br />
                Additional tokens and newer generations of DEGENs will
                dynamically alter the supply of DYSTOPIANs.
            </p>
        </div>
    )
}

export default WhitepaperErc721Dystopian
