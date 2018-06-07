const Ticket = require('./ticketModel');
const _ = require('lodash');

exports.params = function(req, res, next, id) {
  Ticket.findById(id)
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

exports.put = function(req, res, next) {
  var ticket = req.ticket;
  var update = req.body;

  _.merge(ticket, update);

  ticket.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.post = function(req, res, next) {
  var newticket = req.body;
  Ticket.create(newticket).then(
    function(ticket) {
      res.json({ case_id: ticket.id });
      // res.json(ticket);
    },
    function(err) {
      console.log('post error ', err);
      next(err);
    }
  );
};

exports.delete = function(req, res, next) {
  req.ticket.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
