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
                        <h1>smol doomers</h1>
                    </div>

                    <div className={Classes.socials}>
                        <a className={Classes.button} href="https://discord.gg/pQc9xwczW7">
                            <img src="/images/discord.png" alt="discord" />
                        </a>

                        <a className={Classes.button} href="https://twitter.com/smoldoomers">
                            <img src="/images/twitter.png" alt="twitter" />
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
