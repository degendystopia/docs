import Classes from './src/account.module.scss'
import Container from '@/components/container'
import Title from '../title'
import MarketCard from './card'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import DegensTokenABI from '@/tokens/degens'

// Skip typechecking on the window object
declare let window: any

/**
 * Account component
 */
const Account = () => {
    // local states
    const [address, setAddress] = useState<string>('')

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
                        <span className={Classes.name}>User:</span>{' '}
                        <strong>{address}</strong>
                    </div>

                    <div className={Classes.user}>
                        You currently have the following degens:
                    </div>

                    <div className={Classes.listings}>
                        <MarketCard
                            name="Monkee Man"
                            image="/images/degens/15.png"
                            type="Rare"
                        />

                        <MarketCard
                            name="The Zombie Of Atlanta"
                            image="/images/degens/19.png"
                            type="Mythic"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Account
