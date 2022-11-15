const express = require('express');

const router = express.Router();

/* 
    @access      : public
    @description : logs in user
*/
router.get('/', (req, res) => {
  res.json('User Route');
});

/* 
    @access      : public
    @description : registers user
*/
router.post('/', (req, res) => {
  res.json('User Route');
});

module.exports = router;
