var should = require('should');
var sinon = require('sinon');
var mongoose = require('mongoose');

var chai = require('chai');
var expect = chai.expect;
require('sinon-mongoose');

var TicketModel = require('./caseModel');

//
describe('caseController testing', function() {
  describe('Post a new Ticket', function() {
    it('should create new Ticket', function(done) {
      var TicketMock = sinon.mock(
        new TicketModel({
          title: 'Save new ticket from mock',
          text: 'Save new ticket text'
        })
      );
      var ticket = TicketMock.object;
      var expectedResult = { status: true };
      TicketMock.expects('save').yields(null, expectedResult);
      ticket.save(function(err, result) {
        TicketMock.verify();
        TicketMock.restore();
        expect(result.status).to.be.true;
        done();
      });
    });
    // Test will pass if the ticket is not saved
    it('should return error, if ticket not saved', function(done) {
      var TicketMock = sinon.mock(
        new TicketModel({ title: 'Save new ticket from mock' })
      );
      var ticket = TicketMock.object;
      var expectedResult = { status: false };
      TicketMock.expects('save').yields(expectedResult, null);
      ticket.save(function(err, result) {
        TicketMock.verify();
        TicketMock.restore();
        expect(err.status).to.not.be.true;
        done();
      });
    });
  });

  describe('Get all Ticket test', function() {
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
  });

  describe('Delete ticket test', function() {
    it('Should delete ticket of gived id', function(done) {
      var TicketMock = sinon.mock(TicketModel);

      TicketMock.expects('remove')
        .withArgs({ _id: 12345 })
        .yields(null, 'DELETED');

      TicketModel.remove({ _id: 12345 }, function(err, result) {
        TicketMock.verify();
        TicketMock.restore();
        done();
      });
    });
  });

  describe('Update a Ticket', function() {
    it('Should update the ticket with new value', function(done) {
      var TicketMock = sinon.mock(
        new TicketModel({ text: 'Save new ticket from mock' })
      );
      var ticket = TicketMock.object;

      TicketMock.expects('save')
        .withArgs({ _id: 12345 })
        .yields(null, 'UPDATED');

      ticket.save({ _id: 12345 }, function(err, result) {
        TicketMock.verify();
        TicketMock.restore();
        done();
      });
    });
  });
});
