import Classes from './src/navbar.module.scss'
import MenuButton from '../button'

/**
 * Interfaces
 */
interface Props {
    buttons: Button[]
    close(): void
}

interface Button {
    name: string
    url: string
}

/**
 * Navbar component
 */
const NavBar = (props: Props) => {
    return (
        <div className={Classes.root}>
            {props.buttons.map((button: Button, index: number) => {
                return (
                    <MenuButton
                        key={index}
                        name={button.name}
                        url={button.url}
                        close={close}
                    />
                )
            })}

            <span className={Classes.close} onClick={props.close}>
                X
            </span>
        </div>
    )
}

export default NavBar
