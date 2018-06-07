var Company = require('./companyModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  Company.findById(id).then(
    function(company) {
      if (!company) {
        next(new Error('No company with that id'));
      } else {
        req.company = company;
        next();
      }
    },
    function(err) {
      next(err);
    }
  );
};

exports.get = function(req, res, next) {
  Company.find({}).then(
    function(companyies) {
      res.json(companyies);
    },
    function(err) {
      next(err);
    }
  );
};

exports.getOne = function(req, res, next) {
  var company = req.company;
  res.json(company);
};

exports.put = function(req, res, next) {
  var company = req.company;

  var update = req.body;

  _.merge(company, update);

  company.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.post = function(req, res, next) {
  var newCompany = new Company(req.body);

  newCompany.save(function(err, company) {
    if (err) {
      next(err);
    }
    //let temp = res;
    res.json({ company_id: company.id });
  });
};

exports.delete = function(req, res, next) {
  req.company.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
