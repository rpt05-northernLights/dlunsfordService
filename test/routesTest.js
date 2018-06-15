var expect = require('chai');
var sinon = require('sinon');

var routes = require('./../server/api/getAllClosedCases/getAllClosedCasesRoutes');

var Ticket = require('./../server/api/ticket/ticketModel');

describe('routes', function() {
  beforeEach(function() {
    sinon.stub(Ticket, 'find');
  });

  afterEach(function() {
    Ticket.find.restore();
  });
});
