import Classes from './src/list-menu-button.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Clsx from 'clsx'

interface Props {
    name: string
    href?: string
    icon?: string
}

const ListMenuButton = (props: Props) => {
    const router = useRouter()

    return props.href ? (
        <Link href={props.href} scroll={false}>
            <a
                className={Clsx(
                    Classes.root,
                    router.asPath === props.href && Classes.active,
                )}
            >
                <span className={Classes.border} />
                <span className={Classes.icon}>
                    {props.icon || <img src="/images/star.png" alt="star" />}
                </span>
                <span className={Classes.text}>{props.name}</span>
            </a>
        </Link>
    ) : (
        <div
            className={Clsx(
                Classes.root,
                router.asPath === props.href && Classes.active,
            )}
        >
            <span className={Classes.border} />
            <span className={Classes.icon}>
                {props.icon || <img src="/images/star.png" alt="star" />}
            </span>
            <span className={Classes.text}>{props.name}</span>
        </div>
    )
}

export default ListMenuButton
