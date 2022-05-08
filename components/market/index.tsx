import Classes from './src/market.module.scss'
import Container from '@/components/container'
import Title from '../title'
import MarketCard from './card'
import { useState } from 'react'
import Modal from '../modal'

type Stat = {
    name: string
    value: string
}

interface dummyData {
    name: string
    image: string
    type: string
    stats: Stat[]
}

interface Filter {
    type: FilterType
}

type FilterType = {
    common: boolean
    rare: boolean
    mythic: boolean
}

/**
 * Market component
 */
const Market = () => {
    const [modal, setModal] = useState<object>({})
    const [filter, setFilter] = useState<Filter>({
        type: {
            common: true,
            rare: true,
            mythic: true,
        },
    })

    const dummyData: dummyData[] = [
        {
            name: 'Shono Pol',
            image: '/images/degens/1.png',
            type: 'rare',
            stats: [
                {
                    name: 'magic',
                    value: '14',
                },
                {
                    name: 'crafting',
                    value: '19',
                },
                {
                    name: 'damage',
                    value: '24',
                },

                {
                    name: 'murders',
                    value: '18',
                },
            ],
        },
        {
            name: 'Poo Poo Man',
            image: '/images/degens/5.png',
            type: 'common',
            stats: [
                {
                    name: 'magic',
                    value: '29',
                },
                {
                    name: 'crafting',
                    value: '24',
                },
                {
                    name: 'damage',
                    value: '27',
                },

                {
                    name: 'murders',
                    value: '22',
                },
            ],
        },
        {
            name: 'Hairless Degen',
            image: '/images/degens/10.png',
            type: 'mythic',
            stats: [
                {
                    name: 'magic',
                    value: '24',
                },
                {
                    name: 'crafting',
                    value: '59',
                },
                {
                    name: 'damage',
                    value: '44',
                },

                {
                    name: 'murders',
                    value: '14',
                },
            ],
        },
        {
            name: 'Dr. Oetker',
            image: '/images/degens/11.png',
            type: 'mythic',
            stats: [
                {
                    name: 'magic',
                    value: '18',
                },
                {
                    name: 'crafting',
                    value: '25',
                },
                {
                    name: 'damage',
                    value: '21',
                },

                {
                    name: 'murders',
                    value: '11',
                },
            ],
        },

        {
            name: 'Cutie',
            image: '/images/degens/12.png',
            type: 'mythic',
            stats: [
                {
                    name: 'magic',
                    value: '38',
                },
                {
                    name: 'crafting',
                    value: '15',
                },
                {
                    name: 'damage',
                    value: '11',
                },

                {
                    name: 'murders',
                    value: '31',
                },
            ],
        },
    ]

    const handleTypeChange = (e) => {
        setFilter({
            ...filter,
            type: {
                ...filter.type,
                [e.target.value]: filter.type[e.target.value] ? false : true,
            },
        })
    }

    return (
        <div className={Classes.container}>
            <Container>
                <div className={Classes.root}>
                    <Title variant="dark" name="Market | Preview" align="center" />

                    <div className={Classes.flex}>
                        <div className={Classes.filter}>
                            <div className={Classes.title}>Type</div>

                            <label className={Classes.checkbox}>
                                Common
                                <input
                                    type="checkbox"
                                    value="common"
                                    checked={filter.type.common}
                                    onChange={(e) => handleTypeChange(e)}
                                />
                                <span className={Classes.checkmark}></span>
                            </label>

                            <label className={Classes.checkbox}>
                                Rare
                                <input
                                    type="checkbox"
                                    value="rare"
                                    checked={filter.type.rare}
                                    onChange={(e) => handleTypeChange(e)}
                                />
                                <span className={Classes.checkmark}></span>
                            </label>

                            <label className={Classes.checkbox}>
                                Mythic
                                <input
                                    type="checkbox"
                                    value="mythic"
                                    checked={filter.type.mythic}
                                    onChange={(e) => handleTypeChange(e)}
                                />
                                <span className={Classes.checkmark}></span>
                            </label>
                        </div>

                        <div className={Classes.listings}>
                            {dummyData.map((item, index) => {
                                console.log(filter.type[item.type])

                                if (!filter.type[item.type]) {
                                    return null
                                }

                                return (
                                    <div key={index}>
                                        <MarketCard
                                            name={item.name}
                                            image={item.image}
                                            type={item.type}
                                            onClick={() => setModal({ [index]: true })}
                                        />
                                        <Modal
                                            name={item.name}
                                            open={modal[index]}
                                            close={() => setModal({ [index]: false })}
                                        >
                                            <div className={Classes.modal}>
                                                <div className={Classes.degen}>
                                                    <img src={item.image} />
                                                </div>
                                                <div className={Classes.stats}>
                                                    {item.stats.map((stat, statIndex) => {
                                                        return (
                                                            <div
                                                                key={statIndex}
                                                                className={Classes.box}
                                                            >
                                                                <span className={Classes.name}>
                                                                    {stat.name}:
                                                                </span>

                                                                <span className={Classes.value}>
                                                                    {stat.value}
                                                                </span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </Modal>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Market
