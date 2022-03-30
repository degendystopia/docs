import clsx from 'clsx'
import { ReactElement } from 'react'
import LeftMenuButton from './button'
import Classes from './src/list-menu.module.scss'

interface Props {
    buttons: Buttons[]
    font?: 'normal' | 'pixel'
}

type Buttons = {
    name: string
    href?: string
    icon?: ReactElement
}

const ListMenu = (props: Props) => {
    return (
        <div className={clsx(Classes.root, props.font && Classes[props.font])}>
            {props.buttons.map((button, index) => {
                return (
                    <LeftMenuButton
                        name={button.name}
                        href={button.href}
                        icon={button.icon}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default ListMenu
