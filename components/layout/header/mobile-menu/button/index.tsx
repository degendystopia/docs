import Classes from './src/menubutton.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Clsx from 'clsx'

/**
 * Interfaces
 */
interface Props {
    name: string
    url: string
    close(): void
}

/**
 * Menu Button component
 */
const MenuButton = (props: Props) => {
    const router = useRouter()
    let isActive = false

    if (props.url === '/' && router.asPath === '/') {
        isActive = true
    }

    if (props.url !== '/' && router.asPath.includes(props.url)) {
        isActive = true
    }

    return (
        <Link href={props.url}>
            <a
                className={Clsx(Classes.root, isActive && Classes.active)}
                onClick={props.close}
            >
                <span className={Classes.name}>{props.name}</span>
            </a>
        </Link>
    )
}

export default MenuButton
