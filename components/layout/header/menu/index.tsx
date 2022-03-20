import Classes from './src/menu.module.scss'
import NavBar from './navbar'
import Button from '@/components/button'

/**
 * Interfaces
 */
interface Buttons {
    name: string
    url: string
}

/**
 * Menu component
 */
const Menu = () => {
    // local states

    // Buttons array
    const buttons: Buttons[] = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Play',
            url: '/play',
        },
        {
            name: 'News',
            url: '/news',
        },
        {
            name: 'Whitepaper',
            url: '/whitepaper',
        },
        {
            name: 'Market',
            url: '/market',
        },
    ]

    return (
        <div className={Classes.root}>
            <NavBar buttons={buttons} />

            <div className={Classes.wallet}>
                <Button
                    name="Connect Wallet"
                    variant="light"
                    icon={<img src="/images/heart.png" alt="heart" />}
                />
            </div>
        </div>
    )
}

export default Menu
