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
            <div className={Classes.wrapper}>
                <div className={Classes.root}>
                    <div className={Classes.section}>
                        <div className={Classes.content}></div>
                    </div>
                </div>
                <div className={Classes.root}>
                    <div className={Classes.section}>
                        {/* <img className={Classes['wake-1']} src="/images/wake1.png" alt="wake1" /> */}
                        <div className={Classes.image}>
                            <div className={Classes['wake-1']}>
                                <Container>
                                    <Title
                                        variant="light"
                                        name="I need to wake up."
                                        align="center"
                                    />
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

// Export component
export default HomeIntro
