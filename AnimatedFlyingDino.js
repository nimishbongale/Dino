/*
Author @nimishbongale
Version 1.0.2
Date 07/12/2018
A program which makes the dino fly-jump  
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
async function dispup()
{
	simulateKeyPress(38);//press up key
}

async function disdown()
{
	simulateKeyPress(40);//press down key
}

simulateKeyPress(32); //Autostart

tRex.groundYPos=-1;
setInterval(dispup,400);
setInterval(disdown,800);

alert("I'm immortal!");//dino speaks in a speach bubble
