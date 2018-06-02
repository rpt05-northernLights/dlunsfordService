const router = require('express').Router();

router.use('/cases', require('./case/caseRoutes'));

module.exports = router;
