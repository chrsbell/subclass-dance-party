var CrabDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  // debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = BlinkyDancer.step;

  // return blinkyDancer;
  this.$node.addClass('crab');

  // the hue rotation of the dancer, from 0-360
  this.hueRotation = 0;

  // speed at which the dancer changes hue
  this.flashSpeed = (Math.random() * 10) + 10;

  // direction to move in, in radians
  this.direction = 0;

};

CrabDancer.prototype = Object.create(Dancer.prototype);
CrabDancer.prototype.constructor = CrabDancer;

// changing crab color
CrabDancer.prototype.updateColor = function() {

  this.hueRotation = (this.hueRotation + this.flashSpeed) % 360;
  var cssValue = 'hue-rotate(' + this.hueRotation + 'deg)';
  // debugger;
  this.$node.css('-webkit-filter', cssValue);
};

// move the crab
CrabDancer.prototype.move = function() {
  var x = Math.sin(direction);
  var y = Math.cos(direction);
  this.top += y;
  this.left += x;
  this.set
};

CrabDancer.prototype.step = function() {
  this.updateColor();
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle(); // on and off
};


// var jennydancer = new BlinkyDancer()
// jennydancer.step()