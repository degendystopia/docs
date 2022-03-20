import Classes from './src/home-intro.module.scss'
import { ReactNode } from 'react'
import Container from '@/components/container'
import Title from '@/components/title'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Intro component
 */
const HomeIntro = ({}: Props) => {
    return (
        <div className={Classes.root}>
            <Container>
                <Title
                    variant="light"
                    name="A Post-Apocalyptic Metaverse"
                    align="center"
                />
            </Container>
            <div className={Classes.lining} />
        </div>
    )
}

// Export component
export default HomeIntro
