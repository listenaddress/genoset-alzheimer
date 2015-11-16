var genoset293 = require('../');
var should = require('should');
require('mocha');

var isGenoset293 = require('./fixtures/is-genoset-293.json');
var isNotGenoset293 = require('./fixtures/is-not-genoset-293.json');

describe('genoset 293', function() {
  it('should match a genome with genoset 293', function() {
    genoset293(isGenoset293).should.equal(true);
  });
  it('should not match a genome without genoset 293', function() {
    genoset293(isNotGenoset293).should.equal(false);
  });
});