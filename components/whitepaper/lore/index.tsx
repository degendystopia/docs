import Classes from './src/whitepaper-lore.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Market Card component
 */
const WhitePaperLore = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/7.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">Lore</h2>
            </div>

            <div className={Classes.section}>
                <p>Coming Soon!</p>
            </div>
        </div>
    )
}

export default WhitePaperLore
