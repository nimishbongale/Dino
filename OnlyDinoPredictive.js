/*

Author @nimishbongale

Version 1.0.1

Date 23/02/2019

A program which runs a modified version of the dino game, involving changing the user view focus to just a rectangle around the dino, and
all jumps must be made within the blink of an eye, because there isn't enough time to react. 

*/
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
Runner.instance_.canvas.height=140;
Runner.instance_.canvas.width=200;

simulateKeyPress(32);
document.getElementById('main-content').click();
