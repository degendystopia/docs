import Container from '@/components/container'
import Classes from './src/footer.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Footer component
 */
const Footer = ({}: Props) => {
    return (
        <div className={Classes.root}>
            <div className={Classes.lining} />

            <Container>
                <div className={Classes.container}>
                    <div className={Classes.love}>
                        <span>Made with</span>
                        <img alt="heart" src="/images/heart.png" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

// Export component
export default Footer
