import Classes from './src/whitepaper-getting-started.module.scss'

/**
 * Interfaces
 */
interface Props {
    //
}

/**
 * Whitepaper Getting Started Component
 */
const WhitepaperGettingStarted = () => {
    return (
        <div className={Classes.root}>
            <div className={Classes.title}>
                <img
                    className={Classes.degen}
                    src="/images/degens/21.png"
                    alt="Degen Dystopia"
                />
                <h2 className="h4">Getting Started (Testnet)</h2>
            </div>

            <div className={Classes.section}>
                <p>
                    It is highly recommended that you join the Degen Dystopia
                    Discord Server for live support getting the game running for
                    the first time.
                </p>
            </div>

            <div className={Classes.section}>
                <h2 className="h4">0. Installing a wallet</h2>
                <p>
                    This tutorial will assume you have MetaMask already
                    installed.
                    <br />
                    <br />
                    If you don&apos;t have MetaMask installed (or some other
                    Ethereum-compatible wallet) head over to
                    https://metamask.io/ and install it in your browser or
                    device.
                </p>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-1.png"
                        className={Classes.img}
                    />

                    <p>
                        Once it is installed, you should be able to see the
                        MetaMask icon among your browser&apos;s extensions:
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-2.png"
                        className={Classes.img}
                    />

                    <p>
                        Click the icon to see your wallet&apos;s contents and
                        address:
                    </p>
                </div>
            </div>

            <div className={Classes.section}>
                <h2 className="h4">1. Funding your wallet</h2>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-3.png"
                        className={Classes.img}
                    />

                    <p>
                        Once you play on the Testnet, first you will need to set
                        up a wallet and fund it with some AVAX from the Testnet
                        faucet.
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-4.png"
                        className={Classes.img}
                    />
                    <p>
                        First let&apos;s open up our wallet in MetaMask:
                        <br />
                        <br />
                        Now let&apos;s copy out our wallet&apos;s address:
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-5.png"
                        className={Classes.img}
                    />
                    <p>
                        Now head over to https://faucet.avax-test.network/. You
                        should see the front-end for the Avalanche Testnet
                        Faucet.{' '}
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-6.png"
                        className={Classes.img}
                    />
                    <p>
                        Paste your wallet address in the form, fill out the
                        captcha, and click REQUEST 10 AVAX:
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-7.png"
                        className={Classes.img}
                    />
                    <p>The faucet should report a success:</p>
                </div>
            </div>

            <div className={Classes.section}>
                <h2 className="h4">
                    2. Connecting to the game for the first time
                </h2>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-8.png"
                        className={Classes.img}
                    />
                    <p>
                        Now that our wallet has some funds, we&apos;re ready to
                        play! Head over to:
                        <br /> <br />
                        <strong className="text-primary">
                            degendystopia.world/play
                        </strong>
                        <br /> <br />
                        Once the game loads, it will ask you to add the
                        Avalanche Testnet network to MetaMask. Click approve:
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-9.png"
                        className={Classes.img}
                    />
                    <p>The game will then ask you to connect your wallet:</p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-10.png"
                        className={Classes.img}
                    />
                    <p>
                        The game will then ask you to connect your wallet. Once
                        our wallet is connected to the site, we no longer have
                        to repeat this process.
                    </p>
                </div>
            </div>

            <div className={Classes.section}>
                <h2 className="h4">3. Mint your first DEGEN</h2>
                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-11.png"
                        className={Classes.img}
                    />
                    <p>
                        Next you will see a login screen. Click the button to
                        log in.
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-12.png"
                        className={Classes.img}
                    />
                    <p>
                        Your signature will be requested in order to prove you
                        are the owner of the connected wallet:
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-13.png"
                        className={Classes.img}
                    />
                    <p>
                        Once you have signed in, you will see the character
                        select screen. If this is your first time playing, you
                        will see no playable characters:
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-14.png"
                        className={Classes.img}
                    />
                    <p>
                        Click mint() to create a playable Degen. You will be
                        prompted to name it:
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-15.png"
                        className={Classes.img}
                    />
                    <p>
                        You will then be prompted to approve the minting
                        transaction by MetaMask. Click approve to mint a new
                        DEGEN token:
                    </p>
                </div>

                <div className={Classes.section}>
                    <p>
                        Minting may take several seconds to confirm. When the
                        transaction is successful, the page will refresh and you
                        will be prompted to log in again. Once you have logged
                        in again, you will see your newly minted DEGEN. you can
                        mint another DEGEN if you wish, or you can get right
                        into the game.
                    </p>
                </div>
            </div>

            <div className={Classes.section}>
                <h2 className="h4"> 4. Enter the world with your DEGEN</h2>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-16.png"
                        className={Classes.img}
                    />
                    <p>
                        After logging in, simply select the DEGEN you wish to
                        play with, then click the play() button:
                    </p>
                </div>

                <div className={Classes.container}>
                    <img
                        alt="metamask"
                        src="/images/gs-17.png"
                        className={Classes.img}
                    />
                    <p>
                        If everything worked correctly, you&apos;ll see your
                        Degen on the map, ready to explore!
                    </p>
                </div>

                <div className={Classes.section}>
                    <p>
                        Now you&apos;re ready to start kicking ass and stacking
                        stats. Head on to the play guides for more on playing
                        the game!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhitepaperGettingStarted
