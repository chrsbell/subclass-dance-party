describe('crabDancer', function() {

  var crabDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crabDancer = new CrabDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(crabDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(crabDancer.$node, 'toggle');
    crabDancer.step();
    expect(crabDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(crabDancer, 'step');
      expect(crabDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(crabDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(crabDancer.step.callCount).to.be.equal(2);
    });
  });
});
