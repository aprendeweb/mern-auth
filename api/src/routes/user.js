const router = require('express').Router();
const { signIn, signUp } = require('../controllers/user');
const validateSchema = require('../middlewares/validateSchema');
const schema = require('../schemas/user');

router.post('/signIn', validateSchema(schema), signIn);
router.post('/signUp', validateSchema(schema), signUp);

module.exports = router;
