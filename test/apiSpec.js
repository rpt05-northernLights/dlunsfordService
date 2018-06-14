var assert = require('assert');
var sinon = require('sinon');
var PassThrough = require('stream').PassThrough;
var http = require('http');

var api = require('./../server/api/ticket/ticketRoutes');

describe('api', function() {
  beforeEach(function() {
    sinon.stub(http, 'request');
  });

  afterEach(function() {
    http.request.restore();
  });

  it('should convert aget results to an object ', function(done) {
    var expected = { hello: 'world' };
    var response = new PassThrough();

    response.write(JSON.stringify(expected));
    response.end();

    var request = new PassThrough();
    http.request.yields(response).returns(request);

    api.get(function(err, results) {
      assert.deepEqual(result, expected);
      done();
    });
  });
});
