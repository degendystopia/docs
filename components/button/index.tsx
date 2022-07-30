import { ReactElement } from 'react'
import Classes from './src/button.module.scss'
import Clsx from 'clsx'
import Link from 'next/link'

/**
 * Interfaces
 */
interface Props {
    name: string
    icon?: ReactElement
    onClick?(): any
    variant?: 'light' | 'dark'
    effect?: string
    type?: 'submit' | 'button'
    center?: boolean
    href?: string
    scroll?: boolean
}

/**
 * Button component
 */
const Button = (props: Props) => {
    if (props.href) {
        return (
            <Link href={props.href} scroll={props.scroll}>
                <a
                    className={Clsx(
                        Classes.root,
                        props.variant && Classes[props.variant],
                        props.effect && Classes[props.effect],
                        props.effect && Classes[props.effect],
                        props.center && Classes['center'],
                    )}
                    onClick={props.onClick}
                >
                    <span className={Classes.icon}>{props.icon}</span>
                    <span className={Classes.name}>{props.name}</span>
                </a>
            </Link>
        )
    }

    return (
        <button
            type={props.type}
            className={Clsx(
                Classes.root,
                props.variant && Classes[props.variant],
                props.effect && Classes[props.effect],
            )}
            onClick={props.onClick}
        >
            <span className={Classes.icon}>{props.icon}</span>
            <span className={Classes.name}>{props.name}</span>
        </button>
    )
}

// Export Component
export default Button
