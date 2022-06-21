const Router = require('express');
const orgController = require('../controllers/orgController');

const router = new Router();

router.post('/newOrg', orgController.addOrg);
router.get('/orgs', orgController.getOrgList);
router.get('/orgs/:id', orgController.getOrg);
router.delete('/orgs/:id', orgController.deleteOrg);

module.exports = router;