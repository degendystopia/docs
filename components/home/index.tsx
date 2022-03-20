import Classes from './src/home.module.scss'
import Container from '../container'
import HomeIntro from './intro'
import HomeFeatures from './features'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Home component
 */
const Home = ({}: Props) => {
    return (
        <>
            <div className={Classes.root}>
                <div className={Classes['degen-6']} />
                <div className={Classes['degen-5']} />
                <div className={Classes['degen-4']} />
                <div className={Classes['degen-3']} />
                <div className={Classes['degen-2']} />
                <div className={Classes['degen-1']} />
                <div className={Classes['mountain-3']} />
                <div className={Classes['mountain-2']} />
                <div className={Classes['mountain-1']} />
                <div className={Classes['mountains']} />
                <div className={Classes['explosion-3']} />
                <div className={Classes['explosion-2']} />
                <div className={Classes['explosion-1']} />
                <div className={Classes.floor} />
                <div className={Classes.bg} />
            </div>

            <HomeIntro />
            <HomeFeatures />
        </>
    )
}

// Export component
export default Home
