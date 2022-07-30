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

function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

type Props = {
    children?
}

export default function WalletConnector({ children }: Props) {
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

    const [currentConnector, setCurrentConnector] = React.useState<AbstractConnector>(undefined)

    const [state, setState] = React.useState<any>({
        activating: false,
        connected: false,
        disabled: false,
    })

    useEffect(() => {
        if ((window as any).ethereum) {
            setCurrentConnector(injected)
        } else {
            setCurrentConnector(walletconnect)
        }
        const connected = currentConnector === connector
        const s = {
            activating: currentConnector === activatingConnector,
            connected: connected,
            disabled: !triedEager || !!activatingConnector || connected || !!error,
        }
        setState(s)
        console.log('wallet connetion', s.activating, s.connected, s.disabled)
    }, [currentConnector])

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)

    return (
        <RevealButton
            name="Connect Wallet"
            variant="light"
            icon={<img src="/images/heart.png" alt="heart" />}
            // onClick={() => {
            //     return
            //     setActivatingConnector(currentConnector)
            //     activate(currentConnector, (error) => {
            //         if (error) {
            //             setActivatingConnector(undefined)
            //         }
            //     })
            // }}
            reveal={state.activating}
        />
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
