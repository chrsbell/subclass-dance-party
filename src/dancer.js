// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // var this = Object.create(Dancer.prototype)
  // debugger;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  // lineup method for all dancers
  // return this
};

// evenly line up this dancer at a fixed y position
Dancer.prototype.lineUpDancer = function(left) {
  this.setPosition(500, left);
  //this.top = 650;
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  // way1. use anonymous function inside of setTimeout / doesn't require extra clock tick
  var context = this;
  setTimeout(function() {context.step(); }, this.timeBetweenSteps);
  // setTimout() requires 'function reference' to be passed in as a 1st argument in order to operate correctly.
  // so we create anonymous function and, we use closure variable and remember this binding so that when we do the lookup, we can find correct context and execute this step function
  // when happens? -
  // we are not doing any variable lookup until setTimeout invokes the function
  // context.step() is invoked variable lookup AFTER setTimoutout invoking the function

  //// way2. bind - require extra clock tick in spec -  losing the first bind
  //setTimeout(this.step.bind(this), this.timeBetweenSteps)
  // "this.step.bind" return function that is bind to the keyword this
  // when happens? -
  // this.step function invoked immediately before invoking setTimeout
  // and invoking bind (this.step.bind and invoking this), this happens BEFORE invoking setTimeout
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};