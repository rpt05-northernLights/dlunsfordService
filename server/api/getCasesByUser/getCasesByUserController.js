const Ticket = require('./../ticket/ticketModel');

exports.getCasesByUser = (req, res, next) => {
  Ticket.find({ author: req.params.id }, (err, ticket) => {
    if (err) {
      res.send(err);
    }
    res.json(ticket);
  });
};
