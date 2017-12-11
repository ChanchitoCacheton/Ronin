
//Dimensions
var xCanvas=0;
var yCanvas=0;
var width=288;
var height=512;

//canvas
var flappyGame= new Phaser.Game(width, height, Phaser.CANVAS,'flappy_game');


//graphics
var bgUpdate;
var button;
var character;

//INPUTS
var keyInput;


var scene={

	preload: function(){
		//carga los recursos 
		flappyGame.stage.backgroundColor= "#000";
		//carga main stage game
		flappyGame.load.image('bg', 'assets/flappyGame/sprites/bg.png');
		//carga pj
		flappyGame.load.spritesheet('bird', 'assets/flappyGame/sprites/flappySheet.png',34,24);
		//carga boton
		flappyGame.load.image('btn','assets/flappyGame/sprites/bluebird-upflap.png');

	},
	create:function(){

		flappyGame.physics.startSystem(Phaser.Physics.ARCADE);

		//implementa el fondo bajo parametros del canvas
		bgUpdate=flappyGame.add.tileSprite(xCanvas, yCanvas, width, height, 'bg');
		/*button=flappyGame.add.sprite(flappyGame.width/2,flappyGame.height/2,'btn');
		button.anchor.setTo(0.5, -6);*/

		//implementar el sprite del pajaro
		character= flappyGame.add.sprite(100, 100, 'bird',1);
		//implementar su metodo de animacion
		character.animations.add('fly',[0,1,2],15,true);
		//implementa fisicas en el objeto characte
		flappyGame.physics.arcade.enable(character);
		character.body.collideWorldBounds = true;


		//---INPUTS--//
		keyInput= flappyGame.input.keyboard.createCursorKeys();
		
	},
	update:function(){

		//actualiza las variables y metodos.

		bgUpdate.tilePosition.x -=1;

		character.animations.play('fly');

		if(keyInput.right.isDown){

			character.position.x +=1;
		};
		if(keyInput.left.isDown){

			character.position.x -=1;
		};
		if(keyInput.up.isDown){

			character.position.y -=1;
		};
		if(keyInput.down.isDown){

			character.position.y +=1;
		};
	

	},

};

flappyGame.state.add('mainStage',scene);
flappyGame.state.start('mainStage');

