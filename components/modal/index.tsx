import { ReactNode } from 'react'
import Classes from './src/modal.module.scss'

type Props = {
    name?: string
    children?: ReactNode
    open(): boolean
    close(): void
}

const Modal = ({ name, children, open, close }: Props) => {
    if (open) {
        return (
            <div className={Classes.root}>
                <div className={Classes.wrapper}>
                    <div className={Classes.title}>
                        <span className={Classes.text}>{name}</span>
                        <span className={Classes.close} onClick={close}>
                            X
                        </span>
                    </div>

                    <div className={Classes.content}>{children}</div>
                </div>
            </div>
        )
    }

    return null
}

export default Modal
