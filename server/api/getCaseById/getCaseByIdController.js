const Ticket = require('./../ticket/ticketModel');

exports.getCaseById = (req, res, next) => {
  Ticket.find({ _id: req.params.id }, (err, ticket) => {
    if (err) {
      res.send('error getCaseById ', err);
    }
    res.json(ticket);
  });
};
