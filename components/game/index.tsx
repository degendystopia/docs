import Classes from './src/game.module.scss'
import Container from '@/components/container'
import { useEffect, useState } from 'react'
import Button from '@/components/button'

/**
 * Fix full screen type checking errors
 */
declare global {
    interface Element {
        webkitRequestFullscreen?(): void
        msRequestFullscreen?(): void
    }
}

/**
 * Game component
 */
const GameComponent = () => {
    const [loaded, setLoaded] = useState(false)

    /**
     * Phaser JS
     * ----------
     * Phaser runs on client-side and does not render server-side, therefore, we need to import
     * the module dynamically after the component has loaded.
     *
     * We will use the 'useEffect' function of react to determine when the component has mounted
     * in order to load the required modules on client-side only.
     */

    // Anything inside of useEffect will run on client-side only
    useEffect(() => {
        // useEffect is not an async function and therefore we cannot use any await functionality
        // directly. That is why we need to define our own async function and call it below.
        const init = async () => {
            // Import DD
            await import('degen-dystopia')
        }

        // Call our async function
        init()

        return () => {}
    }, [])

    // Toggle Full Screen
    const toggleFullScreen = () => {
        // Define game container
        const gameContainer = document.getElementById('phaser-game')

        // If gameContainer exists
        if (gameContainer) {
            if (gameContainer.requestFullscreen) {
                gameContainer.requestFullscreen()
            } else if (gameContainer.webkitRequestFullscreen) {
                /* Safari */
                gameContainer.webkitRequestFullscreen()
            } else if (gameContainer.msRequestFullscreen) {
                /* IE11 */
                gameContainer.msRequestFullscreen()
            }
        }
    }

    return (
        <Container>
            <div className={Classes.root}>
                {/* note: we have to make this responsive using javascript */}
                <div id="phaser-game" />

                <div className={Classes.actions}>
                    <Button
                        name="Full Screen"
                        variant="light"
                        onClick={toggleFullScreen}
                        icon={<span>[ ]</span>}
                    />
                </div>
            </div>
        </Container>
    )
}

export default GameComponent
