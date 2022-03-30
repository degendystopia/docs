import ListMenu from '@/components/list-menu'
import Classes from './src/whitepaper-roadmap-phase3.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const RoadmapPhase3 = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.section}>
                <div className={Classes.date}>
                    <span className={Classes.black}>Q1</span> 2023
                </div>

                <div className={Classes.heading}>
                    <h2 className="text-secondary">Phase 3</h2>
                    <b>Sustainable Economics & Deflation</b>
                </div>
                <ListMenu
                    buttons={[
                        {
                            name: 'Betting system (bet on DEGENS to earn rewards).',
                            icon: <span className={Classes.icon} />,
                        },
                        {
                            name: 'Tournament system (enter & compete for rewards).',
                            icon: <span className={Classes.icon} />,
                        },
                        {
                            name: 'Housing & Land system (players-come-first).',
                            icon: <span className={Classes.icon} />,
                        },
                        {
                            name: 'DYSTOPIAN fusions (merge two DYSTOPIANs to create 1 more powerful version).',
                            icon: <span className={Classes.icon} />,
                        },
                        {
                            name: 'NFT Marketplace for trading DEGENs and DYSTOPIANs.',
                            icon: <span className={Classes.icon} />,
                        },
                    ]}
                />

                <div className={Classes.section}>
                    As Degen Dystopia continues to grow, we will focus on
                    developing features that add sustainability and inflow of
                    revenue into the game&apos;s rewards treasury. Betting and
                    tournaments will allow investors and players to compete for
                    prizes while subsidizing the rewards paid out to players.
                    The Housing System of Degen Dystopia will require large sums
                    of in-game housing materials to craft a house that becomes a
                    permanent fixture in the Degen Dystopia landscape. This,
                    along with token fusions will increase demand for Degen
                    Dystopia&apos;s resources, opening room for new token mints
                    without creating inflation.
                </div>
            </div>

            <div className={Classes.degen}>
                <img
                    className={Classes.image}
                    src="/images/degens/12.png"
                    alt="Degen"
                />

                <div className={Classes.box} />
            </div>
        </div>
    )
}

export default RoadmapPhase3
