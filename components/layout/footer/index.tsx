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
                <div className={Classes.container}></div>
            </Container>
        </div>
    )
}

// Export component
export default Footer
