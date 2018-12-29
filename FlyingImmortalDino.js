/*
Author @nimishbongale
Version 1.0.3
Date 07/12/2018
A program which makes the dino fly  
*/
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
alert("I believe I can fly!");//dino gives a message 
