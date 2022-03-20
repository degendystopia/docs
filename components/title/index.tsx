import Classes from './src/title.module.scss'
import Clsx from 'clsx'

/**
 * Interfaces
 */
interface Props {
    name: string
    align: 'left' | 'center' | 'right'
    type?: 'subheading' | 'heading'
    variant: 'dark' | 'light'
}

/**
 * Title component
 */
const Title = (props: Props) => {
    return (
        <div
            className={Clsx(
                Classes.root,
                Classes[props.variant],
                Classes[props.align],
            )}
        >
            {props.type == 'subheading' ? (
                <h2 className={Classes.subheading}>{props.name}</h2>
            ) : (
                <h1 className={Classes.heading}>{props.name}</h1>
            )}
        </div>
    )
}

export default Title
