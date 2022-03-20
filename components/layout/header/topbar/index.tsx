import Container from '@/components/container'
import Menu from '../menu'
import MobileMenu from '../mobile-menu'
import Classes from './src/topbar.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * TopBar component
 */
const TopBar = ({}: Props) => {
    return (
        <Container variant="primary">
            <div className={Classes.root}>
                <Menu />
                <MobileMenu />
            </div>
        </Container>
    )
}

// Export component
export default TopBar
