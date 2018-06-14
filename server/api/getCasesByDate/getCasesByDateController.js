const Ticket = require('./../../api/ticket/ticketModel');

exports.getCasesByDate = (req, res, next) => {
  let dateOpened = req.body.opened;
  let dateClosed = req.body.closed || Date.now();

  Ticket.find({ opened: dateOpened, closed: dateClosed }, (err, ticket) => {
    if (err) {
      console.log('error getCasesByDateController ', err);
    }
    res.json(ticket);
  });
};
