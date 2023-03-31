class CardFlipScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CardFlipScene' });
  }

  preload() {
    this.load.image('card', 'images/card_back.jpg');
    this.load.image('card-back', 'images/2_of_clubs.png ');
  }

  create() {
    this.card = this.add.sprite(400, 300, 'card');
    this.card.setOrigin(0.5);
    this.card.setScale(0.3);

    this.cardBack = this.add.sprite(400, 300, 'card-back');
    this.cardBack.setOrigin(0.5);
    this.cardBack.visible = false;
    this.cardBack.setScale(0.3);

    this.timeline = this.tweens.createTimeline({
      repeat: -1 
    });

    
    this.flipAnimation = this.timeline.add({
      targets: this.card,
      scaleX: 0,
      ease: 'Linear',
      duration: 1000,
      onComplete: () => {
        this.card.visible = false;
        this.cardBack.visible = true;
      }
    });

    this.flipBackAnimation = this.timeline.add({
      targets: this.cardBack,
      scaleX: 0,
      ease: 'Linear',
      duration: 1000,
      onComplete: () => {
        this.card.visible = true;
        this.cardBack.visible = false;
      }
    });
    this.timeline.play();
  }
}

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [CardFlipScene]
};
let game = new Phaser.Game(config);
