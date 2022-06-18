const Router = require('express');

const router = new Router();

router.use('/user');
router.use('/orgs');
router.use('/org');

module.exports = router;