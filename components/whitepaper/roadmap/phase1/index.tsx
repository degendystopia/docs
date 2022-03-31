import ListMenu from '@/components/list-menu'
import Classes from './src/whitepaper-roadmap-phase1.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const RoadmapPhase1 = () => {
    return (
        <>
            <div className={Classes.root}>
                <div className={Classes.section}>
                    <div className={Classes.date}>
                        <span className={Classes.black}>Q3</span> 2022
                    </div>

                    <div className={Classes.heading}>
                        <h2 className="text-secondary">Phase 1</h2>
                        <b>Community Growth & Launch</b>
                    </div>
                    <ListMenu
                        buttons={[
                            {
                                name: 'Initial DEGEN token mint.',
                                icon: <span className={Classes.icon} />,
                            },
                            {
                                name: 'Open Beta Launch.',
                                icon: <span className={Classes.icon} />,
                            },
                            {
                                name: 'In-Game Token rewards for players.',
                                icon: <span className={Classes.icon} />,
                            },
                            {
                                name: 'Crafting for Phase 1 DYSTOPIANs.',
                                icon: <span className={Classes.icon} />,
                            },
                            {
                                name: 'NFT Marketplace for trading DEGENs and DYSTOPIANs.',
                                icon: <span className={Classes.icon} />,
                            },
                        ]}
                    />
                </div>

                <div className={Classes.degen}>
                    <img
                        className={Classes.image}
                        src="/images/degens/10.png"
                        alt="Degen"
                    />

                    <div className={Classes.box} />
                </div>
            </div>

            <div className={Classes.section}>
                <p>
                    The initial launch of Degen Dystopia on Avalanche mainnet
                    will give early players the opportunity to begin leveling up
                    their DEGENs, collecting rewards, and forming alliances.
                    From this activity, the on-chain player-run economy will be
                    born. Liquidity for in-game token rewards will remain locked
                    during this phase, giving players the opportunity to
                    accumulate ahead of whales and investors. Don&apos;t worry,
                    investors, you will get your chance in Phase 2.
                </p>
            </div>
        </>
    )
}

export default RoadmapPhase1
