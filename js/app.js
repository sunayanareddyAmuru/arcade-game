// to follow strict values
'use strict';
// creating points for player
var pointsArea = document.querySelector("#runs");
var points = 0;
console.log(points);

function change(img) {
  var fullPath = img.src;
  var filename = fullPath.replace(/^.*[\\\/]/, '');
  // or, try this,
  // var filename = fullPath.split("/").pop();
  console.log(filename);
  // var hi=img.src;
  player.sprite = "images/" + filename;
}
// Enemies our player must avoid
var Enemy = function(speed, x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    this.speed = 100 + Math.floor(Math.random() * 400);
  }
  if (this.x > 500) {
    this.x = 0;
    this.speed = 100 + Math.floor(Math.random() * 400);
  }
  if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 80 && player.y + 80 > this.y) {
    player.x = 200;
    player.y = 400;
  }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Girl {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-horn-girl.png';
  }
}
Girl.prototype.update = function(dt) {}
Girl.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemyPlace = [60, 143, 226];
enemyPlace.map((positionY) => {
  var itemEnemy = new Enemy(150, 0, positionY);
  allEnemies.push(itemEnemy);
});
var player = new Girl(200, 404);
// limiting the player moving area
Girl.prototype.handleInput = function(key) {
  // limiting area on left side
  if (key == 'left') {
    this.x = this.x - 101;
    if (this.x < 0) {
      this.x = 0;
    }
  }
  // limiting area on right side
  else if (key == 'right') {
    this.x = this.x + 101;
    if (this.x > 404) {
      this.x = 404;
    }
  }
  // limiting area on upside
  else if (key == 'up') {
    this.y = this.y - 83;
    if (this.y < 60) {
      setTimeout(() => {
        this.x = 200;
        this.y = 400;
        // incrementing points
        points = points + 1;
        pointsArea.innerHTML = points;
      }, 100);
    }
  }
  // limiting area on down side
  else if (key == 'down') {
    this.y = this.y + 83;
    if (this.y > 404) {
      this.y = 404;
    }
  }
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
