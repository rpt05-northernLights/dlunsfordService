const Ticket = require('./caseModel');
const _ = require('lodash');

exports.params = (req, res, next, id) => {
  Ticket.findById(id)
    // .populate('')
    .exec()
    .then(ticket => {
      if (!ticket) {
        next(new Error('No case with that id'));
      } else {
        req.ticket = ticket;
        next();
      }
    });
};

exports.get = (req, res, next) => {
  Ticket.find({})
    .populate('categories')
    .exec()
    .then(
      tickets => {
        res.json(tickets);
      },
      function(err) {
        next(err);
      }
    );
};

exports.getOne = (req, res, next) => {
  var ticket = req.ticket;
  res.json(ticket);
};

exports.put = (req, res, next) => {
  var ticket = req.ticket;
  var update = req.body;
  console.log('put ', update);

  _.merge(ticket, update);

  ticket.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.post = (req, res, next) => {
  var newticket = req.body;
  Ticket.create(newticket).then(
    ticket => {
      res.json(ticket);
      // res.json(ticket);
    },
    err => {
      console.log('post error ', err);
      next(err);
    }
  );
};

exports.delete = (req, res, next) => {
  req.ticket.remove((err, removed) => {
    if (err) {
      next(err);
    } else {
      console.log(removed);
      res.json(removed);
    }
  });
};
