/*

Author @nimishbongale

Version 1.0.2

Date 21/01/2019

A program which makes the dino invisible

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
simulateKeyPress(32);
Runner.instance_.tRex.spritePos=0;
alert("I'm Invisible!");
