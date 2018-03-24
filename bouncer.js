var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.baseURL = 'https://examples.phaser.io/';
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
