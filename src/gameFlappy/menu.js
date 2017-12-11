var Menu={


	preload:function(){

		Game.stage.backgroundColor = '#fff';
		Game.load.image('btn', 'assets/flappyGame/sprites/message.png');

	},
	create:function(){


		var button= this.add.button(Game.width/2,Game.height/2,'btn',this.startGame,this);
		button.anchor.setTo(0.5);
	},


	startGame:function(){


		//alert("inicio el juego :^)");

		this.state.start('mainGame');
	},




};