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
Runner.instance_.canvas.height=70; //Modify these values to suit your needs 
Runner.instance_.canvas.width=100;

simulateKeyPress(32);
document.getElementById('main-content').click();
