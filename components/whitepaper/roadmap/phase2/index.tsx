import ListMenu from '@/components/list-menu'
import Classes from './src/whitepaper-roadmap-phase2.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const RoadmapPhase2 = () => {
    return (
        <>
            <div className={Classes.root}>
                <div className={Classes.degen}>
                    <img
                        className={Classes.image}
                        src="/images/degens/11.png"
                        alt="Degen"
                    />

                    <div className={Classes.box} />
                </div>

                <div className={Classes.section}>
                    <div className={Classes.date}>
                        <span className={Classes.black}>Q4</span> 2022
                    </div>

                    <div className={Classes.heading}>
                        <h2 className="text-secondary">Phase 2</h2>
                        <b>TInvestment Opportunities</b>
                    </div>
                    <ListMenu
                        buttons={[
                            {
                                name: 'Second Gen DEGEN mint.',
                                icon: <span className={Classes.icon} />,
                            },
                            {
                                name: 'DEGEN scholarship/rental system.',
                                icon: <span className={Classes.icon} />,
                            },
                            {
                                name: 'In-Game Token liquidity pool unlock/DEX.',
                                icon: <span className={Classes.icon} />,
                            },
                            {
                                name: 'Staking vaults for DDGOLD/AVAX.',
                                icon: <span className={Classes.icon} />,
                            },
                        ]}
                    />
                </div>
            </div>

            <div className={Classes.section}>
                <p>
                    The next phase of Degen Development will focus on expanding
                    opportunities for investors to participate in and benefit
                    from the Degen Dystopia economy without needing to actually
                    play the game. A new generation of DEGEN mints will be
                    unlocked, along with a DEGEN rental system that allows
                    players to play Degen Dystopia and earn rewards without
                    having to mint or buy their own DEGEN. Token liquidity will
                    be unlocked to give players an easy way to convert their
                    in-game gains to AVAX & USDC, while simultaneously opening
                    opportunities for Liquidity Providers to benefit from Degen
                    Dystopia&apos;s economy.
                </p>
            </div>
        </>
    )
}

export default RoadmapPhase2
