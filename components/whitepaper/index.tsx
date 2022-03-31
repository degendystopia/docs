import Classes from './src/whitepaper.module.scss'
import Container from '@/components/container'
import Title from '@/components/title'
import ListMenu from '../list-menu'
import { ReactNode } from 'react'
import Sticky from 'react-stickynode'

/**
 * Interfaces
 */
interface Props {
    children: ReactNode
}

/**
 * Whitepaper component
 */
const Whitepaper = ({ children }: Props) => {
    const navigation = [
        {
            title: 'General',
            nav: [
                {
                    name: 'Overview',
                    href: '/whitepaper',
                    icon: (
                        <img
                            alt="Degen Dystopia"
                            src="/images/icons/logo.png"
                        />
                    ),
                },
                {
                    name: 'Roadmap',
                    href: '/whitepaper/roadmap',
                    icon: <img alt="roadmap" src="/images/icons/roadmap.png" />,
                },
                {
                    name: 'Lore',
                    href: '/whitepaper/lore',
                    icon: <img alt="lore" src="/images/icons/lore.png" />,
                },
            ],
        },

        {
            title: 'Tokenomics',
            nav: [
                {
                    name: 'NFTs (ERC-721)',
                    href: '/whitepaper/erc-721',
                    icon: <img alt="erc-721" src="/images/icons/diamond.png" />,
                },
                {
                    name: 'ERC-20',
                    href: '/whitepaper/erc-20',
                    icon: <img alt="erc-20" src="/images/icons/tokens.png" />,
                },
            ],
        },

        {
            title: 'Guides',
            nav: [
                {
                    name: 'Getting Started (Testnet)',
                    href: '/whitepaper/getting-started',
                    icon: <span className={Classes.icon} />,
                },
            ],
        },
    ]

    return (
        <Container>
            <div className={Classes.root}>
                <Title
                    variant="dark"
                    name="Whitepaper | V1.0.0"
                    align="center"
                />

                <div className={Classes.container}>
                    <div className={Classes.menu} id="sidebar">
                        <Sticky
                            enabled={true}
                            top={0}
                            bottomBoundary="#sidebar"
                        >
                            <div className={Classes['menu-container']}>
                                {navigation.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            {item.title && (
                                                <div className={Classes.title}>
                                                    {item.title}
                                                </div>
                                            )}
                                            <ListMenu buttons={item.nav} />
                                        </div>
                                    )
                                })}
                            </div>
                        </Sticky>
                    </div>

                    <div className={Classes.content}>{children}</div>
                </div>
            </div>
        </Container>
    )
}

export default Whitepaper
