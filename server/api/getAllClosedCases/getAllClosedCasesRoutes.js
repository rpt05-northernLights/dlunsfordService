const router = require('express').Router();
const controller = require('./getAllClosedCasesController');

router.route('/').get(controller.getAllClosedCases);

module.exports = router;
