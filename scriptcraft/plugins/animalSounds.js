var sounds = require('sounds');
var input = require('input');
function onInput( animal, player ) {
  animal = animal.trim().toLowerCase();
  /*switch (animal) {
    case 'cat':
      echo( player, "A cat says 'meow'");
      sounds.catMeow(player.location);
      break;
    case 'chicken':
      echo( player, "A chicken says 'cluck'");
      sounds.chickenSay(player.location);
      break;
    default:
      echo( player, "I never heard of a '" + animal + "'" + animal.length());
  }*/
  if (animal == 'cat') {
      echo( player, "A cat says 'meow'");
      sounds.catMeow(player.location);
  }
  else if (animal == 'chicken') {
      echo( player, "A chicken says 'cluck'");
      sounds.chickenSay(player.location);
  }
  else {
      echo( player, "I never heard of a '" + animal + "' " + animal.length());
  }
}
function animalSounds( player ) {
  input( player,
         "What's your favorite animal" +
         " - cat, chicken?", onInput);
}
exports.animalSounds = animalSounds;
