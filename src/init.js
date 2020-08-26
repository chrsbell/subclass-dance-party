$(document).ready(function() {
  window.dancers = [];

  // click callback for lineUp button
  $('.lineUpButton').on('click', function(event) {
    debugger;
    // get the name of the callback function from dancefloor.html and call it
    var lineUpFunctionName = $(this).data('callback');
    var lineUpFunction = window[lineUpFunctionName]; //window.lineUp / lineUp function in lineUp.js
    lineUpFunction();
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // debugger;
    // var dancer = dancerMakerFunction(
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    // dancer = BlinkyDancer {top: 235.34098625830157, left: 232.0057069907799, timeBetweenSteps: 390.3637902821753, $node: init(1)}, dancerMakerFunction = ƒ
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

