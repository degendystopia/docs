import ComingSoon from '@/components/coming-soon'
import WhitelistForm from '@/components/whitelist-form'
import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

const MintPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Whitelist | down bad doomers</title>
                <meta property="og:title" content="Whitelist | downbad doomers" />
                <meta property="og:url" content="https://doomers.wtf/whitelist" />
                <meta property="og:image" content="https://doomers.wtf/images/wagmi.jpg" />
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
            <WhitelistForm />
        </>
    )
}

export default MintPage
