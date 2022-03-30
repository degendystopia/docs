import ListMenu from '@/components/list-menu'
import Classes from './src/whitepaper-roadmap-phase4.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const RoadmapPhase4 = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.degen}>
                <img
                    className={Classes.image}
                    src="/images/degens/13.png"
                    alt="Degen"
                />

                <div className={Classes.box} />
            </div>

            <div className={Classes.section}>
                <div className={Classes.date}>
                    <span className={Classes.black}>Q2</span> 2023
                </div>

                <div className={Classes.heading}>
                    <h2 className="text-secondary">Phase 4</h2>
                    <b>Custom Servers & Mod Support</b>
                </div>
                <ListMenu
                    buttons={[
                        {
                            name: 'Open source Degen Dystopia&apos;s server, and use the WORLD NFT protocol to allow third parties to host their own servers, and issue and collect rewards for the same players, who can reuse their DEGEN tokens on multiple servers.',
                            icon: <span className={Classes.icon} />,
                        },
                        {
                            name: 'Addition of new continents for additional housing & new content.',
                            icon: <span className={Classes.icon} />,
                        },
                        {
                            name: 'AVAX Subnet to drive player rewards via network fees.',
                            icon: <span className={Classes.icon} />,
                        },
                    ]}
                />

                <div className={Classes.section}>
                    Our long-term goal for Degen Dystopia is for our own players
                    to co-create with us, to take ownership not only over their
                    own characters but of the game world itself. By making the
                    Degen Dystopia source code available for anyone to run &
                    mod, we believe we can create a decentralized game ecosystem
                    where people can transport their assets across game servers,
                    decreasing reliance on the official Degen Dystopia servers,
                    and allowing new levels of creativity and innovation to be
                    injected into the Degen Dystopia ecosystem through
                    player-created customizations.
                </div>
            </div>
        </div>
    )
}

export default RoadmapPhase4
