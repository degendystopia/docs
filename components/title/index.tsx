import Classes from './src/title.module.scss'
import Clsx from 'clsx'

/**
 * Interfaces
 */
interface Props {
    name: string
    align: 'left' | 'center' | 'right'
    type?: 'subheading' | 'heading'
    variant: 'dark' | 'light' | 'title-primary'
}

/**
 * Title component
 */
const Title = (props: Props) => {
    if (props.variant === 'title-primary') {
        return (
            <h1 className={Clsx(Classes.root, Classes[props.variant])}>
                <span className={props.variant}>{props.name}</span>
            </h1>
        )
    }
    return (
        <div className={Clsx(Classes.root, Classes[props.variant], Classes[props.align])}>
            {props.type == 'subheading' ? (
                <h2 className={Classes.subheading}>{props.name}</h2>
            ) : (
                <h1 className={Classes.heading}>{props.name}</h1>
            )}
        </div>
    )
}

export default Title
