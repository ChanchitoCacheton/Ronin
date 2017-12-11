var xCanvas=0;
var yCanvas=0;
var canvasWidth=288;
var canvasHeight=512;



var Game= new Phaser.Game(canvasWidth, canvasHeight, Phaser.CANVAS,'flappy_game');

Game.state.add('Menu',Menu);
Game.state.add('mainGame',mainGame);
//Game.state.add('Game_Over',gameOver);

Game.state.start('Menu');
