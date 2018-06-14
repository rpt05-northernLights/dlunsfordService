var should = require('should');
var sinon = require('sinon');
var mongoose = require('mongoose');

var chai = require('chai');
var expect = chai.expect;
require('sinon-mongoose');
var routes = require('./../api');
var TicketModel = require('./../ticket/ticketModel');
var factories = require('./../../../test/factories');

//
describe('getAllClosedCasesController Test', function() {
  describe('Get all Closed Ticket test', function() {
    it('Should call find once', function(done) {
      var TicketMock = sinon.mock(TicketModel);
      TicketMock.expects('find').yields(null, 'TICKETS');

      TicketModel.find(function(err, result) {
        TicketMock.verify();
        TicketMock.restore();
        should.equal('TICKETS', result, 'Test fails due to unexpected result');
        done();
      });
    });

    //
    it('shoule return only closed cases', function() {
      var a = factories.sampleTicket();
      var b = factories.sampleTicket();
      var expectedModels = [a, b];

      TicketModel.get.yields(null, expectedModels);
      var req = { params: {} };
      var res = {
        send: sinon.stub()
      };

      routes.getAllClosedCases(req, res);
    });
  });
});
