var bg;

var mainGame={

	preload:function(){

		Game.load.image('bg','assets/flappyGame/sprites/bg.png');
		Game.load.spritesheet('bird','assets/flappyGame/sprites/flappySheet.png');
		Game.load.image('pipe','assets/flappyGame/sprites/pipe-green.png');

		Game.forceSingleUpdate=true;
	},
	create:function(){

		bg= Game.add.tileSprite(xCanvas, yCanvas, canvasWidth, canvasHeight, 'bg');
	},
	update:function(){},





};