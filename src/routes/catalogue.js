const router = require('express').Router();
const catalogueController = require('../controllers/catalogue');

router.get('/', catalogueController.getRecipes);
router.post('/', catalogueController.createRecipe);
router.get('/:id', catalogueController.getRecipeDetail);
router.get('/user/:uid', catalogueController.getRecipesByUser);
router.post('/user', catalogueController.addFavRecipe);

module.exports = router;
