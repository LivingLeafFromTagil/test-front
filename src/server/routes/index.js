const Router = require('express');
const userRouter = require('./userRouter');
const orgRouter = require('./orgRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/org', orgRouter);

module.exports = router;