/*
Author @nimishbongale
Version 1.0.2
Date 13/01/2019
A program which enables you to play the dino game in arcade mode,even offline 
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
const game=Runner.instance_;

const tRex=game.trex;

game.setArcadeMode(tRex);

alert("Arcade Mode Offline!");
