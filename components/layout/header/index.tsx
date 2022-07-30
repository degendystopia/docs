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
                            <img src="/images/logo.png" alt="down bad doomers" />
                        </div>
                        <h1>down bad doomers</h1>
                    </div>

                    <div className={Classes.socials}>
                        <a className={Classes.button} href="https://discord.gg/doomers">
                            <img src="/images/discord.png" alt="discord" />
                        </a>

                        <a className={Classes.button} href="https://twitter.com/smoldoomers">
                            <img src="/images/twitter.png" alt="twitter" />
                        </a>

                        <a
                            className={Classes.button}
                            href="https://opensea.io/collection/down-bad-doomers-official"
                        >
                            <img src="/images/opensea.png" alt="opensea" />
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
