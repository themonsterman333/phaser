function preload() {

    game.load.baseURL = 'http://examples.phaser.io/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('flyer', 'assets/sprites/master.png');

}

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    image = game.add.sprite(0, 0, 'flyer');
    
    game.physics.enable(image, Phaser.Physics.ARCADE);
    
    image.body.velocity.setTo(200,200);
    
    image.body.collideWorldBounds = true;
    
    image.body.bounce.set(1);

}
