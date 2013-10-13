require('should');

var fs = require('fs');
var Agent = require('../');
var fixtures = JSON.parse(fs.readFileSync('test/fixtures.json'));

describe("Agent#browser_name", function() {
  it("returns the browser name", function() {
    fixtures.forEach(function(fixture) {
      var agent = new Agent(fixture.source);
      agent.browser_name.should.eql(fixture.browser_name);
    })
  })
})

describe("Agent#browser_version", function() {
  it("returns the browser version", function() {
    fixtures.forEach(function(fixture) {
      var agent = new Agent(fixture.source);
      agent.browser_version.should.eql(fixture.browser_version);
    })
  })
})

describe("Agent#os", function() {
  it("returns the operating system", function() {
    fixtures.forEach(function(fixture) {
      var agent = new Agent(fixture.source);
      agent.os.should.equal(fixture.os);
    })
  })
})

describe("Agent#platform", function() {
  it("returns the platform", function() {
    fixtures.forEach(function(fixture) {
      var agent = new Agent(fixture.source);
      agent.platform.should.eql(fixture.platform);
    })
  })
})

