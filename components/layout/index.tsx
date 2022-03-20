import Classes from './src/layout.module.scss'
import { ReactNode, useEffect } from 'react'
import Header from './header'
import Footer from './footer'

/**
 * Interfaces
 */
interface Props {
    children: ReactNode
}

/**
 * Layout component
 */
const Layout = ({ children }: Props) => {
    return (
        <div className={Classes.root}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

// Export component
export default Layout
