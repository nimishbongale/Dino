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
	simulateKeyPress(38);
}

async function disdown()
{
	simulateKeyPress(40);
}

simulateKeyPress(32); //Autostart

tRex.groundYPos=-1;
setInterval(dispup,400);
setInterval(disdown,800);

alert("I'm immortal!");
