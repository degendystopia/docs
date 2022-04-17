import Classes from './src/mobile-menu.module.scss'
import NavBar from './navbar'
import Button from '@/components/button'
import { useState } from 'react'

/**
 * Interfaces
 */
interface Buttons {
    name: string
    url: string
}

/**
 * Mobile Menu Component
 */
const MobileMenu = () => {
    // local states
    const [open, setOpen] = useState<boolean>(false)

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
            url: 'https://docs.degendystopia.world',
        },
        {
            name: 'Market',
            url: '/market',
        },
    ]

    return (
        <div className={Classes.root}>
            <h1 className="h6">Degen Dystopia</h1>

            <div className={Classes.toggle}>
                <Button
                    name="Menu"
                    variant="light"
                    icon={<img src="/images/star.png" alt="star" />}
                    onClick={() => setOpen(true)}
                />
            </div>

            {open && <NavBar buttons={buttons} close={() => setOpen(false)} />}
        </div>
    )
}

export default MobileMenu
