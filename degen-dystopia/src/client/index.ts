import { config } from './game'

window.addEventListener('load', () => {
    runGame()
})

export const runGame = function () {
    console.log('game running')
}

export const phaserConfig = config
export const test = 'test'
