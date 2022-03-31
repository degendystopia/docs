import Phaser from 'phaser'

class MyGame extends Phaser.Scene {
    constructor() {
        super()
    }

    preload() {
        //
    }

    create() {
        //
    }
}

export const config = {
    type: Phaser.AUTO,
    parent: 'phaser-game',
    width: 800,
    height: 600,
    scene: MyGame,
}

export const game = new Phaser.Game(config)

export const test = 'test'

export const runGame = () => {
    console.log('running game...')
}
