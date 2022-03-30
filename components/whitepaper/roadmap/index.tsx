import ListMenu from '@/components/list-menu'
import RoadmapPhase0 from './phase0'
import RoadmapPhase1 from './phase1'
import RoadmapPhase2 from './phase2'
import RoadmapPhase3 from './phase3'
import RoadmapPhase4 from './phase4'
import Classes from './src/whitepaper-roadmap.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitePaperRoadmap = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/8.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">Roadmap</h2>
            </div>

            <RoadmapPhase0 />
            <RoadmapPhase1 />
            <RoadmapPhase2 />
            <RoadmapPhase3 />
            <RoadmapPhase4 />
        </div>
    )
}

export default WhitePaperRoadmap
