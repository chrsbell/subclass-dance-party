var ChrisDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  debugger;
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = BlinkyDancer.step;

  // return blinkyDancer;
  this.$node.addClass('crab');
  this.rotation = 0;
  this.increment = (Math.random() * 10) + 10;
};

ChrisDancer.prototype = Object.create(Dancer.prototype);
ChrisDancer.prototype.constructor = ChrisDancer;

// changing crab color
ChrisDancer.prototype.updateColor = function() {

  this.rotation = (this.rotation + this.increment) % 360;
  var cssValue = 'hue-rotate(' + this.rotation + 'deg)';
  // debugger;
  this.$node.css('-webkit-filter', cssValue);
};

ChrisDancer.prototype.step = function() {
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