const router = require('express').Router();

router.use('/cases', require('./case/caseRoutes'));
// router.use('types', require('./type/typeRoutes'));
router.use('/getCaseStatus', require('./getCaseStatus/getCaseStatusRouter'));
router.use('/tickets', require('./ticket/ticketRoutes'));
router.use('/categories', require('./category/categoryRoutes'));
router.use('/users', require('./user/userRoutes'));
router.use('/messages', require('./message/messagerRoutes'));
router.use('/accounts', require('./company/companyRoutes'));

module.exports = router;
