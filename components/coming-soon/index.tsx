import Classes from './src/coming-soon.module.scss'
import Container from '@/components/container'
import Title from '../title'

/**
 * Coming Soon component
 */
const ComingSoon = () => {
    return (
        <div className={Classes.container}>
            <Container>
                <div className={Classes.root}>
                    <Title variant="dark" name="Coming Soon" align="center" />
                </div>
            </Container>
        </div>
    )
}

export default ComingSoon
