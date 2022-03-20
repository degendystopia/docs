import Classes from './src/container.module.scss'
import { ReactNode } from 'react'

/**
 * Interfaces
 */
interface Props {
    variant?: 'transparent' | 'primary'
    children: ReactNode
}

/**
 * Container component
 */
const Container = ({ variant, children }: Props) => {
    return (
        <div className={variant && Classes[variant]}>
            <div className={Classes.root}>{children}</div>
        </div>
    )
}

// Export component
export default Container
