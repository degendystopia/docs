import Classes from './src/account.module.scss'
import Container from '@/components/container'
import Title from '../title'
import MarketCard from './card'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Skip typechecking on the window object
declare let window: any

/**
 * Account component
 */
const Account = () => {
    // local states
    const [address, setAddress] = useState<string>('')

    const getData = async () => {
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        const getConnectedAddress = await provider.listAccounts()

        setAddress(getConnectedAddress[0])
    }

    useEffect(() => {
        getData()
    }, [])

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
