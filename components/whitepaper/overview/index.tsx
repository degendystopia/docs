import Classes from './src/whitepaper-overview.module.scss'
import WhitePaperWhatIsDegenDystopia from './what-is-degen-dystopia'
import WhitePaperWhyCreateDegenDystopia from './why-create-degen-dystopia'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitePaperOverview = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/1.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">Degen Dystopia</h2>
            </div>

            <img
                className={Classes.img}
                src="/images/degen-dystopia.png"
                alt="Degen Dystopia"
            />

            <div className={Classes.section}>
                <small>
                    <i>
                        Ravaged landscapes stretch out in all directions.
                        Burned-out buildings loom ominously over the alleys of
                        abandoned cities. Corroded droids hunt down travelers
                        foolish enough to wander through their domains.
                        Survivors of long-forgotten wars scavenge together what
                        little they can in the hopes of forging a new life in
                        this desolate world. Welcome to the wasteland. Welcome
                        to Degen Dystopia.
                    </i>
                </small>
            </div>

            <WhitePaperWhatIsDegenDystopia />
            <WhitePaperWhyCreateDegenDystopia />
        </div>
    )
}

export default WhitePaperOverview
