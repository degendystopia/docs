import ComingSoon from '@/components/coming-soon'
import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

const BurnPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Burn | down bad doomers</title>
                <meta property="og:title" content="Burn | downbad doomers" />
                <meta property="og:url" content="https://doomers.wtf/Burn" />
            </Head>
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
            <ComingSoon />
        </>
    )
}

export default BurnPage
