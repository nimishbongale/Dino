const game=Runner.instance_;
const tRex=game.tRex;

const dispatchKeyEvent = function(eventName, keyCode) {

  var e = new Event(eventName);

  e.keyCode = keyCode;

  document.dispatchEvent(e);

}

const simulateKeyPress = function(keyCode) {

  dispatchKeyEvent('keydown', keyCode);

setTimeout(function() {

    dispatchKeyEvent('keyup', keyCode);

  }, 300);

}
simulateKeyPress(32); //Autostart
tRex.groundYPos=-1;
alert("I'm immortal!");
