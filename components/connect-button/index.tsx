import React, { useEffect } from 'react'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { useEagerConnect, useInactiveListener } from '../../core/hooks'
import { injected, walletconnect } from '../../core/connectors'
import { Spinner } from '../Spinner'
import Button from '../button'
import RevealButton from '../reveal-button'

type Props = {
    children?
    name
    variant
    icon
    useInjected
}

export default function ConnectButton({ children, name, variant, icon, useInjected }: Props) {
    const context = useWeb3React<Web3Provider>()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context

    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = React.useState<any>()
    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect()

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)

    const currentConnector = useInjected ? injected : walletconnect
    const activating = currentConnector === activatingConnector
    const connected = currentConnector === connector
    const disabled = !triedEager || !!activatingConnector || connected || !!error

    return (
        <div>
            <RevealButton
                name={name}
                variant={variant || 'light'}
                icon={icon}
                onClick={() => {
                    setActivatingConnector(currentConnector)
                    activate(currentConnector, (error) => {
                        if (error) {
                            setActivatingConnector(undefined)
                        }
                    })
                }}
                reveal={connected}
            >
                {children}
            </RevealButton>
        </div>
    )
}

//// unused

function ChainId() {
    const { chainId } = useWeb3React()

    return (
        <>
            <span>Chain Id</span>
            <span role="img" aria-label="chain">
                ⛓
            </span>
            <span>{chainId ?? ''}</span>
        </>
    )
}

function BlockNumber() {
    const { chainId, library } = useWeb3React()

    const [blockNumber, setBlockNumber] = React.useState<number>()
    React.useEffect((): any => {
        if (!!library) {
            let stale = false

            library
                .getBlockNumber()
                .then((blockNumber: number) => {
                    if (!stale) {
                        setBlockNumber(blockNumber)
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setBlockNumber(null)
                    }
                })

            const updateBlockNumber = (blockNumber: number) => {
                setBlockNumber(blockNumber)
            }
            library.on('block', updateBlockNumber)

            return () => {
                stale = true
                library.removeListener('block', updateBlockNumber)
                setBlockNumber(undefined)
            }
        }
    }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

    return (
        <>
            <span>Block Number</span>
            <span role="img" aria-label="numbers">
                🔢
            </span>
            <span>{blockNumber === null ? 'Error' : blockNumber ?? ''}</span>
        </>
    )
}

function Account() {
    const { account } = useWeb3React()

    return (
        <>
            <span>Account</span>
            <span role="img" aria-label="robot">
                🤖
            </span>
            <span>
                {account === null
                    ? '-'
                    : account
                    ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
                    : ''}
            </span>
        </>
    )
}

function Balance() {
    const { account, library, chainId } = useWeb3React()

    const [balance, setBalance] = React.useState()
    React.useEffect((): any => {
        if (!!account && !!library) {
            let stale = false

            library
                .getBalance(account)
                .then((balance: any) => {
                    if (!stale) {
                        setBalance(balance)
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setBalance(null)
                    }
                })

            return () => {
                stale = true
                setBalance(undefined)
            }
        }
    }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

    return (
        <>
            <span>Balance</span>
            <span role="img" aria-label="gold">
                💰
            </span>
            <span>{balance === null ? 'Error' : balance ? `Ξ${formatEther(balance)}` : ''}</span>
        </>
    )
}

function Header() {
    const { active, error } = useWeb3React()

    return (
        <>
            <h1 style={{ margin: '1rem', textAlign: 'right' }}>
                {active ? '🟢' : error ? '🔴' : '🟠'}
            </h1>
            <h3
                style={{
                    display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: '1fr min-content 1fr',
                    maxWidth: '20rem',
                    lineHeight: '2rem',
                    margin: 'auto',
                }}
            >
                <ChainId />
                <BlockNumber />
                <Account />
                <Balance />
            </h3>
        </>
    )
}
