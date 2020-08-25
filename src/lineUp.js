// lineup method for all dancers
var lineUp = function() {
  // get the list of dancers
  // iterate over list
  // call lineUp on each element

  debugger;

  // the width of the browser window
  var windowWidth = $(window).width();

  // distance between each dancer
  var increment = windowWidth / window.dancers.length; // full screen width / the number of dancer (200 / 10 = 20)

  for (let i = 0; i < window.dancers.length; i++) {
    window.dancers[i].lineUpDancer(i * increment);   //Dancer.prototype.lineUp?
  }
  // window.dancers.forEach(element =>
  //   element.lineUp();
  // )

};