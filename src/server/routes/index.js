const Router = require('express');
const userRouter = require('./userRouter');
const orgRouter = require('./orgRouter');
const catRouter = require('./categoryRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/org', orgRouter);
router.use('/cat', catRouter);

module.exports = router;