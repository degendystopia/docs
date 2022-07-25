import Classes from './src/home.module.scss'
import HomeIntro from './intro'
import HomeFeatures from './features'
import Script from 'next/script'
import Title from '../title'
import Link from 'next/link'
import MintCountdown from '../mint-countdown'
import MintForm from '../mint-form'

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
                <div className={Classes.section}>
                    <Title
                        variant="title-primary"
                        name="₁₀₅₀ 𝒹ₒₒₘₑᵣₛ ₛₜᵢₗₗ ₜᵣᵧₙₐ ₘₐₖₑ ᵢₜ"
                        align="center"
                    />
                </div>

                {/* <div className={Classes.section}> */}
                <div className={Classes['degen-6']} />
                <div className={Classes['degen-5']} />
                <div className={Classes['degen-4']} />
                <div className={Classes['degen-3']} />
                <div className={Classes['degen-2']} />
                <div className={Classes['degen-1']} />
                <div className={Classes['missedout']} />
                <div className={Classes['apartments-1']} />
                <div className={Classes['parallax-4']} />
                <div className={Classes['parallax-3']} />
                <div className={Classes['parallax-2']} />
                <div className={Classes['parallax-1']} />
                {/* <div className={Classes.floor} /> */}
                <div className={Classes.bg} />
                {/* </div> */}
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

            <MintCountdown>
                <MintForm />
            </MintCountdown>
            <HomeIntro />
            <HomeFeatures />
        </>
    )
}

// Export component
export default Home
