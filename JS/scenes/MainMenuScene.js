export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super("MainMenuScene");
    }

    preload() {
        this.load.image('GameBG', '../Assets/Background/mainmenuBG.png');
               
        // // Load images
        this.load.image('startButton', './assets/buttons/startBtn.png');
        this.load.image('creditButton', './assets/buttons/creditsBtn.png');
        this.load.image('quitButton', './assets/buttons/quitBtn.png');
        
      
    }

    create() {
        // BG
        this.background = this.add.image(0, 0, 'GameBG').setOrigin(0, 0);
        this.background.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        
    
        // Add Start button
            const startButton = this.add.image(925, 525 , 'startButton') 
            startButton.setOrigin(0.5);
            startButton.setScale(0.7);
            startButton.setInteractive();
            startButton.on('pointerdown', () => {
                this.scene.start('GameBootScene');
            

            });
            
            startButton.on('pointerover', () => {
                startButton.setTint(0xb2ffb2);
            });
            startButton.on('pointerout', () => {
                startButton.clearTint();
            });
    
        // Add Credit button
            const creditButton = this.add.image(925, 640, 'creditButton'); 
            creditButton.setOrigin(0.5);
            creditButton.setScale(0.7);
            creditButton.setInteractive();
            creditButton.on('pointerdown', () => {
                if (!this.scene.isActive('CreditsScene')) {
                    this.scene.stop('titleScene');
                    this.scene.start('CreditsScene');
                }
            });
        
            creditButton.on('pointerover', () => {
                creditButton.setTint(0xb2ffb2);
            });
            creditButton.on('pointerout', () => {
                creditButton.clearTint();
            });
        
    
        // Add Quit button
            const quitButton = this.add.image(925,750, 'quitButton'); 
            quitButton.setOrigin(0.5);
            quitButton.setScale(0.7);
            quitButton.setInteractive();
            quitButton.on('pointerdown', () => {
                if (window.confirm("Are you sure you want to quit?")) {
                    window.close();
                }
                
            });
        
            
            quitButton.on('pointerover', () => {
                quitButton.setTint(0xb2ffb2);
            });
            quitButton.on('pointerout', () => {
                quitButton.clearTint();
            });
    
        // Get reference 
        this.gameScene = this.scene.get('gameScene');
    }
}