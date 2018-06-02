var Type = require('./typeModel');
var _ = require('lodash');

exports.params = (req, res, next, id) => {
  Type.findById(id).then(
    type => {
      if (!type) {
        next(new Error(`No type with id`));
      } else {
        req.type = type;
        next();
      }
    },
    err => {
      next(err);
    }
  );
};

exports.get = (req, res, next) => {
  Type.find({}).then(
    types => {
      res.json(types);
    },
    err => {
      next(err);
    }
  );
};

exports.getOne = (req, res, next) => {
  var type = req.type;
  res.json(type);
};

exports.put = (req, res, next) => {
  var type = req.type;
  var update = req.body;
  _.merge(type, update);

  type.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.post = (req, res, next) => {
  var newType = req.body;

  Type.create(newType).then(
    type => {
      res.json(type);
    },
    err => {
      next(err);
    }
  );
};

exports.delete = (req, res, next) => {
  req.type.remove((err, removed) => {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
