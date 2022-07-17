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
        <Container>
            {/* <img className={Classes['wake-1']} src="/images/wake1.png" alt="wake1" /> */}
            <div className={Classes.image}>
                <div className={Classes['wake-1']}>
                    <Container>
                        <Title variant="light" name="I'm down bad." align="center" />
                    </Container>
                </div>
            </div>
        </Container>
    )
}

// Export component
export default HomeIntro
