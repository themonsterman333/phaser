var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.baseURL = 'https://examples.phaser.io/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('flyer', 'assets/sprites/aqua_ball.png');
    
    game.load.image('robot', 'assets/sprites/aqua_ball.png' );
    
    game.load.atlas('bot', 'assets/sprites/running_bot.png');
    
    game.load.image('movement', 'assets/sprites/ship.png')

}

var movement;

var upKey;
var downKey;
var leftKey;
var rightKey;

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    flyer = game.add.sprite(0, 0, 'flyer');
    
    game.physics.enable(flyer, Phaser.Physics.ARCADE);
    
    flyer.body.velocity.setTo(200,200);
    
    flyer.body.collideWorldBounds = true;
    
    flyer.body.bounce.set(1);
    
    robot = game.add.sprite(800, 400, 'robot');
    
    game.physics.enable(robot, Phaser.Physics.ARCADE);
    
    robot.body.velocity.setTo(200,200);
    
    robot.body.collideWorldBounds = true;
    
    robot.body.bounce.set(1);
    
    movement = game.add.sprite(400, 200, 'movement');
    
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    

}

function update() {
    if (upKey.isDown)
    {
        movement.y = movement.y - 3;
    }
    else if (downKey.isDown)
    {
        movement.y = movement.y + 3;
    }

    if (leftKey.isDown)
    {
        movement.x = movement.x - 3;
    }
    else if (rightKey.isDown)
    {
        movement.x = movement.x + 3;
    }
}

function render() {

}