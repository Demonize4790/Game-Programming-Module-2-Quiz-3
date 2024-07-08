export default class winningScene extends Phaser.Scene {
    constructor() {
        super("winningScene");
    }

    init(data){
        this.score = data.score;
        this.coin  = data.coin;
    }

    preload() {
        //IMAGES
        this.load.image('restartButton', './Assets/Buttons/retryBtn.png');
        this.load.image('mainMenuButton', './Assets/Buttons/menuBtn.png');
        this.load.image('GameBG2', './Assets/Background/winingScene1.png');
        
        //AUDIO
        this.load.audio('gameoverSound', './assets/audio/BGMusic/Game Over.ogg');
        this.load.audio('sound', './assets/audio/sound-effect/menu.wav');
    }
    
    create() {

        this.backgroundw = this.add.image(0, 0, 'GameBG2').setOrigin(0, 0);
        this.backgroundw.setDisplaySize(this.cameras.main.width, this.cameras.main.height);
        

        //SCORE
        const scoreText = this.add.bitmapText(this.sys.game.config.width / 2, 290, 'font', 'Score: ' + this.score, 25)
            .setOrigin(0.5, 0.5)
            .setTint(0x000000); 

        const coinText = this.add.bitmapText(this.sys.game.config.width / 2, 340, 'font', 'Coin Collected: ' + this.coin, 25)
            .setOrigin(0.5, 0.5)
            .setTint(0x000000); 



       // RESTART
        const restartButton = this.add.image(1050, 450, 'restartButton');
        restartButton.setOrigin(0.5);
        restartButton.setScale(0.7);
        restartButton.setInteractive();

        restartButton.on('pointerdown', () => {
            this.scene.start('gameScene');
            this.sound.stopAll();
        });

        restartButton.on('pointerover', () => {
            this.tweens.add({
                targets: restartButton,
                scale: 0.6,
                duration: 200,
                ease: 'Power2'
            });
            this.sound.play('sound');
            document.body.style.cursor = 'pointer';
        });

        restartButton.on('pointerout', () => {
            this.tweens.add({
                targets: restartButton,
                scale: 0.5,
                duration: 200,
                ease: 'Power2'
            });
            document.body.style.cursor = 'default';
        });

        // MAIN MENU
        const mainMenuButton = this.add.image(800, 450, 'mainMenuButton');
        mainMenuButton.setOrigin(0.5);
        mainMenuButton.setScale(0.7);
        mainMenuButton.setInteractive();

        mainMenuButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
            this.sound.stopAll();
        });

        mainMenuButton.on('pointerover', () => {
            this.tweens.add({
                targets: mainMenuButton,
                scale: 0.6,
                duration: 200,
                ease: 'Power2'
            });
            this.sound.play('sound');
            document.body.style.cursor = 'pointer';
        });

        mainMenuButton.on('pointerout', () => {
            this.tweens.add({
                targets: mainMenuButton,
                scale: 0.5,
                duration: 200,
                ease: 'Power2'
            });
            document.body.style.cursor = 'default';
        });


        // Play game over sound
        const gameoverSound = this.sound.add('gameoverSound', { volume: 1});
        gameoverSound.play();
    }
}