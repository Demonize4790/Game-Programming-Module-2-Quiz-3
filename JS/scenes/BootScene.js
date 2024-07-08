export default class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        this.load.bitmapFont('font', './assets/fonts/thick_8x8.png', '../assets/fonts/thick_8x8.xml');
    }

    create() {
        this.cameras.main.setBackgroundColor('#54aeff');

        const centerX = this.sys.game.config.width / 2;
        const centerY = this.sys.game.config.height / 2;

        // Loading text
        this.loadingText = this.add.bitmapText(centerX, centerY +0, 'font', 'LOADING..........', 40).setOrigin(0.5, 0.5);



        this.load.on('complete', () => {
        this.loadingText.destroy();
        });

        this.time.delayedCall(1000, () => {
        this.loadingText.destroy();

        const startText = this.add.bitmapText(centerX, centerY + 0, 'font', 'Preparing Food for Grandma', 35).setOrigin(0.5, 0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('MainMenuScene') 
 
        });
    });
    }
}