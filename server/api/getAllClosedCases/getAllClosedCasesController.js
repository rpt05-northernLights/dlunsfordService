const Ticket = require('./../ticket/ticketModel');
const _ = require('lodash');

exports.getAllClosedCases = (req, res, next) => {
  Ticket.find({ status: 'closed' }, (err, ticket) => {
    if (err) {
      res.send('no good', err);
    }
    console.log(ticket.length);
    let closedCasesArray = [];
    ticket.forEach(item => {
      closedCasesArray.push(item.id);
    });

    console.log(closedCasesArray);
    res.json(closedCasesArray);
  });
};
