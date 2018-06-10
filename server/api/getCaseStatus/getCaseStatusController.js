const Ticket = require('./../ticket/ticketModel');
const _ = require('lodash');
//
exports.params = function(req, res, next, id) {
  Ticket.findById(id)
    .select('title')
    .populate('message')
    .exec()
    .then(function(ticket) {
      if (!ticket) {
        next(new Error('No ticket with that id'));
      } else {
        req.ticket = ticket;
        next();
      }
    });
};

exports.get = function(req, res, next) {
  Ticket.find({})
    .populate({ path: 'author', select: 'username' }) /// messages
    .exec()
    .then(
      function(tickets) {
        res.json(tickets);
      },
      function(err) {
        next(err);
      }
    );
};

exports.getOne = function(req, res, next) {
  var ticket = req.ticket;
  console.log('---------------------', req);
  res.json(ticket);
};
