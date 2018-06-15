const router = require('express').Router();
const controller = require('./getCaseStatusController');

// make sure the routes are correct
router.param('id', controller.params);
router.route('/:id').get(controller.getOne);

module.exports = router;
