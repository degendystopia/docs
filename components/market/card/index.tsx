import Classes from './src/market-card.module.scss'

/**
 * Interfaces
 */
interface Props {
    image: string
    name: string
    type: string
    onClick?(): any
}

/**
 * Market Card component
 */
const MarketCard = ({ image, name, type, onClick }: Props) => {
    return (
        <div className={Classes.root} onClick={onClick}>
            <div className={Classes.image}>
                <img src={image} alt={name} />
            </div>

            <div className={Classes.name}>
                <h1>{name}</h1>
            </div>

            <div className={Classes.type}>
                <span>{type}</span>
            </div>
        </div>
    )
}

export default MarketCard
