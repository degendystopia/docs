import ListMenu from '@/components/list-menu'
import Classes from './src/whitepaper-roadmap-phase0.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const RoadmapPhase0 = () => {
    return (
        <>
            <div className={Classes.root}>
                <div className={Classes.degen}>
                    <img
                        className={Classes.image}
                        src="/images/degens/9.png"
                        alt="Degen"
                    />

                    <div className={Classes.box} />
                </div>

                <div className={Classes.section}>
                    <div className={Classes.date}>
                        <span className={Classes.black}>Q2</span> 2022
                    </div>

                    <div className={Classes.heading}>
                        <h2 className="text-secondary">Phase 0</h2>
                        <b>Testing & Community Formation</b>
                    </div>
                    <ListMenu
                        buttons={[
                            {
                                name: 'To begin we will grow our initial community by working with early players to test the game.',
                                icon: <span className={Classes.icon} />,
                            },
                            {
                                name: 'Open Alpha on Testnet.',
                                icon: <span className={Classes.icon} />,
                            },
                            {
                                name: 'Community members will be chosen for airdrops based on involvement in testing, discord, and social media.',
                                icon: <span className={Classes.icon} />,
                            },
                        ]}
                    />
                </div>
            </div>

            <div className={Classes.section}>
                <p>
                    At Degen Dystopia, we believe in developing, testing, and
                    delivering a quality product first and foremost to our
                    audience. We will therefore extensively test Degen
                    Dystopia&apos;s gameplay and smart contracts prior to
                    release. Community members who contribute time and energy to
                    help us develop and test will be prioritized for the
                    issuance of early-adopter incentives, which most projects
                    usually reserve for pump-and-dump &quot;presales&quot;.
                </p>
            </div>
        </>
    )
}

export default RoadmapPhase0
