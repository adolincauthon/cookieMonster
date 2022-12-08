const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { postUser, getUser } = require('../controllers/userController');

/* 
    @access      : public
    @description : registers user
*/
router.post(
  '/',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  postUser
);

/* 
    @access      : public
    @description : logs in user
*/
router.get(
  '/',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  getUser
);

/* 
    @access      : public
    @description : updates user password
*/
router.put('/password', (req, res) => {
  res.json('User Route');
});

module.exports = router;
