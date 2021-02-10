const router = require('express').Router();
const catalogueController = require('../controllers/catalogue');

router.get('/', catalogueController.getCatalogue);
router.post('/', catalogueController.createProduct);

module.exports = router;
