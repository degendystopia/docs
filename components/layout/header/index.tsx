import Container from '@/components/container'
import Classes from './src/header.module.scss'
import TopBar from './topbar'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Header component
 */
const Header = ({}: Props) => {
    return (
        <div className={Classes.root}>
            <TopBar />
            <Container>
                <div className={Classes.container}>
                    <div className={Classes.logo}>
                        <div className={Classes.image}>
                            <img src="/images/logo.png" alt="Degen Dystopia" />
                        </div>
                        <h1>Degen Dystopia</h1>
                    </div>

                    <div className={Classes.socials}>
                        <a
                            className={Classes.button}
                            href="https://discord.gg/gQUrbGgyNh"
                        >
                            <img src="/images/discord.png" alt="discord" />
                        </a>

                        <a
                            className={Classes.button}
                            href="https://twitter.com/DegenDystopia"
                        >
                            <img src="/images/twitter.png" alt="twitter" />
                        </a>

                        <a
                            className={Classes.button}
                            href="https://www.youtube.com/channel/UCVwhaWaHf7z6UC0iaNJoznA"
                        >
                            <img src="/images/youtube.png" alt="youtube" />
                        </a>
                    </div>
                </div>
            </Container>
            <div className={Classes.lining} />
        </div>
    )
}

// Export component
export default Header
