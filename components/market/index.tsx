import Classes from './src/market.module.scss'
import Container from '@/components/container'
import Title from '../title'
import MarketCard from './card'

/**
 * Coming Soon component
 */
const Market = () => {
    return (
        <div className={Classes.container}>
            <Container>
                <div className={Classes.root}>
                    <Title
                        variant="dark"
                        name="Market | Preview"
                        align="center"
                    />

                    <div className={Classes.listings}>
                        <MarketCard
                            name="Shono Pol"
                            image="/images/degens/1.png"
                            type="Rare"
                        />

                        <MarketCard
                            name="Poo Poo Man"
                            image="/images/degens/5.png"
                            type="Common"
                        />

                        <MarketCard
                            name="Hairless Degen"
                            image="/images/degens/10.png"
                            type="Rare"
                        />

                        <MarketCard
                            name="Dr. Oetker"
                            image="/images/degens/11.png"
                            type="Rare"
                        />

                        <MarketCard
                            name="Cutie"
                            image="/images/degens/12.png"
                            type="Rare"
                        />

                        <MarketCard
                            name="Slime Eater"
                            image="/images/degens/13.png"
                            type="Common"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Market
