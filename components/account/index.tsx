import Classes from './src/account.module.scss'
import Container from '@/components/container'
import Title from '../title'
import MarketCard from '../market/card'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import DegensTokenABI from '@/tokens/degens'
import Modal from '../modal'

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

        // Initialize degens contract
        const DegensContract = new ethers.Contract(
            '0x2a014dFF1e035B0B622689bCc599b60E34AACf11',
            DegensTokenABI,
            signer,
        )

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
                <Title variant="dark" name="Account | Preview" align="center" />

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
