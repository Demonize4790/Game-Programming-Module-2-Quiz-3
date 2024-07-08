import BootScene from './scenes/BootScene.js';
import MainMenuScene from './scenes/MainMenuScene.js';
import GameBootScene from './scenes/GameBootScene.js';
import GameScene from './scenes/gameScene.js';
import winningScene from './scenes/winningScene.js';
import GameOverScene from './scenes/GameOverScene.js';
import CreditsScene from './scenes/CreditsScene.js';



var config = {
    type: Phaser.AUTO,
    width: 1840,
    height: 820,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
    pixelArt: true,


    scene: [BootScene, MainMenuScene, GameBootScene, GameScene, winningScene, GameOverScene, CreditsScene] 
    
};

new Phaser.Game(config);