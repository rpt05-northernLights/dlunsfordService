const Account = require('./../company/companyModel');

exports.params = (req, res, next, id) => {
  Account.findById(id)
    .exex()
    .then(account => {
      if (!account) {
        next(new Error('No account by that id'));
      } else {
        req.account = account;
        next();
      }
    });
};

exports.get = (req, res, next) => {
  Account.find({})
    .exec()
    .then(
      accounts => {
        res.json(accounts);
      },
      err => {
        next(err);
      }
    );
};

exports.getOne = (req, res, next) => {
  var account = req.account;
  res.json(account);
};
