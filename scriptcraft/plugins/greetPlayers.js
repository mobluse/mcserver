var greeting = require('greeting');
var fireworks = require('fireworks');
function greetPlayer( event ) {
  var player = event.player;
  var message = greeting.random() + player.name;
  echo(player, message);
  fireworks.firework(player.location);
};
events.connection( greetPlayer );

