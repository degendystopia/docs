import Classes from './src/account.module.scss'
import Container from '@/components/container'
import Title from '../title'
import MarketCard from '../market/card'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import DegensTokenABI from '@/tokens/degens'
import Modal from '../modal'
import Contracts from '../../utils/contracts'

import { getDefaultProvider } from 'ethers'
import { NftProvider, useNft } from 'use-nft'

// Alternatively, you can use the "ethereum" fetcher. Note
// that we are using window.ethereum here (injected by wallets
// like MetaMask), but any standard Ethereum provider would work.
// const fetcher = ["ethereum", { ethereum }]

// Wrap your app with <NftProvider />.
function Account3() {
    const contract = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
    const tokenIds = ['0x1', '0x2', '0x3']

    // local states
    const [address, setAddress] = useState<string>('')
    const [modal, setModal] = useState<object>({})

    // We are using the "ethers" fetcher here.
    const ethersConfig = {
        provider: new ethers.providers.Web3Provider((window as any).ethereum, 'any'),
    }

    var rows = []
    for (var i = 0; i < tokenIds.length; i++) {
        const tokenId = tokenIds[i]
        rows.push(<Nft key={tokenId} contract={contract} tokenId={tokenId} />)
    }
    return <NftProvider fetcher={['ethers', ethersConfig]}>{rows}</NftProvider>
}
{
    /* 
function NftGrid({contractAddr, tokenIds, numrows}) {
} */
}

// useNft() is now ready to be used in your app. Pass
// the NFT contract and token ID to fetch the metadata.
function Nft({ contract, tokenId }) {
    const { loading, error, nft } = useNft(contract, tokenId)

    // nft.loading is true during load.
    if (loading) return <>Loading…</>

    // nft.error is an Error instance in case of error.
    if (error || !nft) return <>Error.</>

    // You can now display the NFT metadata.
    return (
        <section>
            <h1>{nft.name}</h1>
            <img src={nft.image} alt="" />
            <p>{nft.description}</p>
            <p>Owner: {nft.owner}</p>
            <p>Metadata URL: {nft.metadataUrl}</p>
        </section>
    )
}
// Skip typechecking on the window object
declare let window: any

type Stat = {
    name: string
    value: string
}

interface dummyData {
    name: string
    image: string
    type: string
    stats: Stat[]
}

/**
 * Account component
 */
const Account = () => {
    // local states
    const [address, setAddress] = useState<string>('')
    const [modal, setModal] = useState<object>({})

    const dummyData: dummyData[] = [
        {
            name: 'down bad doomer #303',
            image: '/images/degens/1.png',
            type: 'rare',
            stats: [
                {
                    name: 'magic',
                    value: '14',
                },
                {
                    name: 'crafting',
                    value: '19',
                },
                {
                    name: 'damage',
                    value: '24',
                },

                {
                    name: 'murders',
                    value: '18',
                },
            ],
        },
    ]

    //
    const getData = async () => {
        // Create a new ethers.js instance
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        // Request permissions to connect to user account
        await provider.send('eth_requestAccounts', [])

        // Define signer
        const signer = provider.getSigner()

        // Get the connected user address
        const userAddress = await signer.getAddress()

        // If address is null in state
        if (!address) {
            // Store the user address in state
            setAddress(userAddress)
        }

        // initialize contract
        const contracts = new Contracts(signer)

        // get owend tokens
        const userTokens = await contracts.doomers.contract.getTokensOfOwner(userAddress)

        console.log(userTokens)

        // if address is not null (if user is logged in)
        // if (address) {
        //     // Get owned degen tokens by user address
        //     const getDegenTokens = await DegensContract.ownedTokens(address)

        //     console.log(getDegenTokens)

        //     // Get data from contract
        //     const data = await DegensContract.getDegenToken(0)

        //     // Get token uri from contract
        //     const uri = await DegensContract.tokenURI('0')

        //     // Console log the data
        //     console.log(data) // Internal JSON-RPC error: code: -32603 "execution reverted"
        //     console.log(uri) // empty string

        //     // For each token id, get degen meta data
        //     getDegenTokens.forEach(async (id: string) => {
        //         // Get data from contract
        //         const data = await DegensContract.getDegenToken(1)

        //         // Get token uri from contract
        //         const uri = await DegensContract.tokenURI(1)

        //         // Console log the data
        //         console.log(data) // Internal JSON-RPC error: code: -32603 "execution reverted"
        //         console.log(uri) // empty string
        //     })
        // }
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address])

    /**
     * MOCKUP
     * Monkee notes:
     * This is just a quick mockup and the final version will be more detailed and better ofc
     */
    return (
        <Container>
            <div className={Classes.root}>
                <Title variant="light" name="Account | Preview" align="center" />

                <div className={Classes.container}>
                    <div className={Classes.user}>
                        <div className={Classes.box}>
                            <span className={Classes.name}>User:</span>{' '}
                            <strong>0x...{address.slice(address.length - 5)}</strong>
                        </div>

                        <div className={Classes.box}>
                            <span className={Classes.name}>Gold:</span> <strong>11</strong>
                        </div>

                        <div className={Classes.box}>
                            <span className={Classes.name}>Scrap:</span> <strong>17</strong>
                        </div>
                    </div>

                    <div className={Classes.center}>Your Doomers:</div>

                    <div className={Classes.listings}>
                        {dummyData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <MarketCard
                                        name={item.name}
                                        image={item.image}
                                        type={item.type}
                                        onClick={() => setModal({ [index]: true })}
                                    />
                                    <Modal
                                        name={item.name}
                                        open={modal[index]}
                                        close={() => setModal({ [index]: false })}
                                    >
                                        <div className={Classes.modal}>
                                            <div className={Classes.degen}>
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className={Classes.stats}>
                                                {item.stats.map((stat, statIndex) => {
                                                    return (
                                                        <div
                                                            key={statIndex}
                                                            className={Classes.box}
                                                        >
                                                            <span className={Classes.name}>
                                                                {stat.name}:
                                                            </span>

                                                            <span className={Classes.value}>
                                                                {stat.value}
                                                            </span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Account
