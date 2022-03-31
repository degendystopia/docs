import GameComponent from '@/components/game'
import type { NextPage } from 'next'
import Head from 'next/head'

const PlayPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Play | Degen Dystopia</title>
                <meta property="og:title" content="Play | Degen Dystopia" />
                <meta
                    property="og:url"
                    content="https://degendystopia.world/play"
                />
            </Head>

            <GameComponent />
        </>
    )
}

export default PlayPage
