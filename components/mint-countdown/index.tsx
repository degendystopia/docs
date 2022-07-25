import Classes from './src/mint.module.scss'
import Container from '@/components/container'
import React, { FormEventHandler, ReactNode, useEffect } from 'react'

import Countdown from 'react-countdown'

/**
 * MintCountdown component
 */
/**
 * Interfaces
 */
interface Props {
    date: string
    children: ReactNode
}

/**
 * Layout component
 */
const convertToUtc = (date: Date) => {
    return Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
    )
}

const MintCountdown = (props: Props) => {
    const completed = new Date(props.date).getTime() > Date.now()
    return (
        <Container>
            <div className={Classes.wrapper}>
                <div className={Classes.root}>
                    {/* <div className={Classes.section}> */}
                    <div className={Classes.center}>
                        {completed ? (
                            <div className={Classes.image}>
                                {/* <div className={Classes.roughmarket} /> */}
                                <div className={Classes.roughmarket}>
                                    <h2>
                                        minting starts in{' '}
                                        <span className="text-primary">
                                            <Countdown date={new Date(props.date)} />
                                        </span>{' '}
                                    </h2>
                                    <p>{new Date(props.date).toString()}</p>
                                </div>
                            </div>
                        ) : (
                            props.children
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MintCountdown
