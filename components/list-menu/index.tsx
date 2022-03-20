import LeftMenuButton from './button'
import Classes from './src/list-menu.module.scss'

interface Props {
    buttons: Buttons[]
}

type Buttons = {
    name: string
    href?: string
}

const ListMenu = (props: Props) => {
    return (
        <div className={Classes.root}>
            {props.buttons.map((button, index) => {
                return (
                    <LeftMenuButton
                        name={button.name}
                        href={button.href}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default ListMenu
