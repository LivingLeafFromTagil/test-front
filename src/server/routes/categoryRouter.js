const Router = require('express');
const categoryController = require('../controllers/categoryController');

const router = new Router();

router.post('/newCategory', categoryController.addCategory);
router.get('/category/:id', categoryController.getCategory);
router.delete('/category/:id', categoryController.deleteCategory);

module.exports = router;