const router = require('express').Router();
const controller = require('./getCasesByUserController');

router.route('/:id').get(controller.getCasesByUser);
//router.route('/:id').post(controller.getCasesByUser);
module.exports = router;
