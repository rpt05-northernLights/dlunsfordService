const router = require('express').Router();

router.use('/cases', require('./case/caseRoutes'));
// router.use('types', require('./type/typeRoutes'));

module.exports = router;
