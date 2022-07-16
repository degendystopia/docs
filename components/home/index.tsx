import Classes from './src/home.module.scss'
import HomeIntro from './intro'
import HomeFeatures from './features'
import Script from 'next/script'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Home component
 */
const Home = ({}: Props) => {
    return (
        <>
            <div className={Classes.root}>
                <div className={Classes['degen-6']} />
                <div className={Classes['degen-5']} />
                <div className={Classes['degen-4']} />
                <div className={Classes['degen-3']} />
                <div className={Classes['degen-2']} />
                <div className={Classes['degen-1']} />
                <div className={Classes['missedout']} />
                <div className={Classes.content}>₁₀₅₀ ₛₘₒₗ 𝒹ₒₒₘₑᵣₛ ₜᵣᵧₙₐ ₘₐₖₑ ᵢₜ</div>
                {/* <div className={Classes['mountain-3']} />
                <div className={Classes['mountain-2']} />
                <div className={Classes['mountain-1']} />
                <div className={Classes['mountains']} />
                <div className={Classes['explosion-3']} />
                <div className={Classes['explosion-2']} />
                <div className={Classes['explosion-1']} /> */}
                {/* <div className={Classes.floor} /> */}
                {/* <div className={Classes.bg} /> */}
            </div>

            <div>
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-46JYD6CGK4"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-46JYD6CGK4');
        `}
                </Script>
            </div>

            <HomeIntro />
            <HomeFeatures />
        </>
    )
}

// Export component
export default Home
