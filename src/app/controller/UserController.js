const router = require('express').Router();
const {signIn,signUp,userRegistration,updateUserDetails,deleteUser} = require('../services/UserService');
const middleware = require('../middleware/validation/validationMiddleware');
const schemas = require('../middleware/validation/UserSchema');

router.get('/user',(req,res) => userDetails(req,res));

router.post('/login', middleware(schemas.signInDetails, 'body'), (req,res) => signIn(req,res));

router.post('/signup', (req,res) => signUp(req,res));

router.put('/user', (req,res) => updateUserDetails(req,res));

router.delete('/user', (req,res) => deleteUser(req,res));

module.exports = router;