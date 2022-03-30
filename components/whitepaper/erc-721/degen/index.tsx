import ListMenu from '@/components/list-menu'
import Classes from './src/whitepaper-erc721-degen.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitepaperErc721Degen = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/15.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">About DEGEN</h2>
            </div>
            <p>
                The DEGEN is the core token of Degen Dystopia. It represents the
                playable character itself, with its own look, name, and game
                stats. It is a non-fungible token, and owning or renting one is
                required to play the game.
                <br />
                <br />
                Every DEGEN token in the collection comes with its own unique
                randomly generated artwork.
                <br />
                <br />
                Each DEGEN token has a set of stats and abilities that can be
                leveled up by playing the game, and are stored on-chain to allow
                easy transfer of DEGEN tokens between players and across Degen
                Dystopia servers. Leveled-up DEGEN tokens are more powerful in
                the Degen Dystopia game.
                <br />
                <br />
                Every DEGEN token is associated with a unique animated character
                sprite which acts as the player’s in-game avatar.
            </p>

            <h2 className="h4">Rarity</h2>
            <p>
                Each DEGEN is of either COMMON, RARE, or MYTHIC rarity.
                <br />
                <br />
                <strong>NOTE:</strong> Rarer DEGENS have rarer artwork. MYTHIC
                Degens also get special in-game cosmetic effects such as custom
                particle effects and lighting, allowing players to more easily
                identify the biggest badasses on the server .
            </p>

            <h2 className="h4">Supply</h2>
            <p>
                The number of DEGEN tokens that can be minted at any time is
                capped according to the minting rules for the current
                generation.
                <br />
                <br />
                <strong>
                    The first generation of DEGEN tokens will have a supply of:
                </strong>
            </p>

            <ListMenu
                buttons={[
                    {
                        name: '900 COMMON DEGENs: for a mint price of 3 AVAX.',
                    },
                    {
                        name: '90 RARE DEGENs: for a mint price of 15 AVAX.',
                    },
                    {
                        name: '9 MYTHIC DEGENs: for a mint price of 150 AVAX.',
                    },
                ]}
            />

            <h2 className="h4">Trading</h2>
            <p>
                DEGEN tokens will be tradeable on the Degen Dystopia NFT
                marketplace with a 2% sales tax which pays into the player
                rewards pool.
            </p>
        </div>
    )
}

export default WhitepaperErc721Degen
