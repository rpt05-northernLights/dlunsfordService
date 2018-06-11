const router = require('express').Router();
const controller = require('./getCaseByIdController');

router.route('/:id').get(controller.getCaseById);
module.exports = router;
