import { GameComponentMobile } from '@/components/game'
import type { NextPage } from 'next'
import Head from 'next/head'

const PlayPageMobile: NextPage = () => {
    let mobileStyle = {
        transform: 'rotate(90deg)',
        // transition: 'transform 150ms ease', // smooth transition
        margin: '200px',
    }
    return (
        <>
            <Head>
                <title>Play | Degen Dystopia | Mobile</title>
                <meta property="og:title" content="Play | Degen Dystopia" />
                <meta property="og:url" content="https://degendystopia.world/play-mobile" />
            </Head>

            <GameComponentMobile />
        </>
    )
}

export default PlayPageMobile
