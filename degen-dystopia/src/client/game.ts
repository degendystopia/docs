import Phaser from 'phaser'
//import BBCodeTextPlugin from 'phaser3-rex-plugins/plugins/bbcodetext-plugin.js';

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

export const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL, // needed for lights
    backgroundColor: '#2d2d2d',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        expandParent: true,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        zoom: 4,
    },
    // scene: [PreloadScene, TitleScene, MainScene, HUDScene, OptionsScene],
    scene: [],
    parent: 'phaser-game',
    dom: {
        createContainer: true,
    },
    render: {
        pixelArt: true,
    },
}
