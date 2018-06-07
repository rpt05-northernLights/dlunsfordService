const Message = require('./messageModel');
const _ = require('lodash');

exports.params = function(req, res, next, id) {
  Message.findById(id)
    // .populate('')
    .exec()
    .then(function(message) {
      if (!message) {
        next(new Error('No meesage was found with that id'));
      } else {
        req.message = message;
        next();
      }
    });
};

exports.get = function(req, res, next) {
  Message.find({})
    .populate('')
    .exec()
    .then(
      function(message) {
        res.json(message);
      },
      function(err) {
        next(err);
      }
    );
};

exports.getOne = function(req, res, next) {
  var Message = req.message;
  res.json(message);
};

exports.put = function(req, res, next) {
  var message = req.message;
  var update = req.body;

  _.merge(message, update);

  message.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.post = function(req, res, next) {
  var newMessage = req.body;
  Message.create(newMessage).then(
    function(message) {
      res.json(message);
    },
    function(err) {
      console.log('message post error ', err);
      next(err);
    }
  );
};

exports.delete = function(req, res, next) {
  req.message.remove(function(err, remove) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
