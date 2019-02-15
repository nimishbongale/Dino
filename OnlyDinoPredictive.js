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
