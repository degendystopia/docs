import Classes from './src/mint.module.scss'
import Container from '@/components/container'
import React, { FormEventHandler, ReactNode, useEffect } from 'react'

import Countdown from 'react-countdown'
import MintForm from '../mint-form'
import Button from '../button'
import Link from 'next/link'
import WalletConnector from '../wallet-connector'

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
const startDate = 'Tues, 26 Jul 2022 0:00:00 GMT'

const MintCountdown = ({ revealForm }) => {
    const completed = new Date(startDate).getTime() > Date.now()
    const reveal = revealForm ? (
        <MintForm />
    ) : (
        <Link href="/mint">
            <div className={Classes['center']}>
                <div className={Classes.wrapper}>
                    <div className={Classes.section}>
                        <div className={Classes.image}>
                            <div className={Classes.hereitis} />
                            <h2>
                                <a>
                                    <Button
                                        name="MINT"
                                        variant="light"
                                        icon={<img src="/images/heart.png" alt="heart" />}
                                    />
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
                <p> mint is live!</p>
            </div>
        </Link>
    )
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
                                            <Countdown date={new Date(startDate)} />
                                        </span>{' '}
                                    </h2>
                                    <p>{new Date(startDate).toString()}</p>
                                </div>
                            </div>
                        ) : (
                            reveal
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MintCountdown
