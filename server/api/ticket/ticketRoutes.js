const router = require('express').Router();
const controller = require('./ticketController');

// make sure the routes are correct
router.param('id', controller.params);

router
  .route('/')
  .get(controller.get)
  .post(controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete);

// custom routes

module.exports = router;
