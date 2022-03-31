import GameComponent from '@/components/game'
import type { NextPage } from 'next'
import Head from 'next/head'

const PlayPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Degen Dystopia | Game</title>
            </Head>

            <GameComponent />
        </>
    )
}

export default PlayPage
