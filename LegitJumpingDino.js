/*
Author @nimishbongale
Version 1.1.2
Date 08/12/2018
A program which makes the dino jump automatically
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
const jump = function() {simulateKeyPress(38);};
const duck = function() {simulateKeyPress(40);};
const game = Runner.instance_;
(function tick() {
  if (game.crashed || game.paused) {
    return requestAnimationFrame(tick);
  }
const obstacles = game.horizon.obstacles;
if (obstacles.length) {//defining game variables 
    const tRex = game.tRex;
    const tRexWidth = tRex.config.WIDTH;
    const obstacle = obstacles[0];
    const obstacleWidth = obstacles[0].width;
    const obstacleHeight = obstacles[0].typeConfig.height;
    const gravity = game.config.GRAVITY;
    const safety = 2 * game.currentSpeed;
    const jumpHeight = obstacleHeight + safety;
    const jumpVelocityY = Math.sqrt(2 * gravity * jumpHeight);
    const jumpAngle = 60 * Math.PI / 180;
    const jumpVelocity = jumpVelocityY / Math.sin(jumpAngle);
    const jumpDistance = safety + Math.pow(jumpVelocity, 2) * Math.sin(2 * jumpAngle) / gravity;
if (obstacle.xPos - tRex.xPos - tRexWidth <= 0.5 * (jumpDistance - obstacleWidth)) {
      if (obstacle.yPos > 75) {
        if (!tRex.jumping) {
          jump();
          tRex.jumpVelocity = -jumpVelocityY;
        }
      } else
      if (obstacle.yPos === 75) {
        if (!tRex.ducking) {//condition to duck 
          duck();
        }
      }
    }
  }
 requestAnimationFrame(tick);//run the game
}());
