const express = require('express');

const router = express.Router();

/*
    @access      : public
    @description : returns all of users domains
*/
router.get('/', (req, res) => {
  res.json('Domain Route');
});

/*
      @access      : private
      @description : adds domain to user's account
*/
router.post('/', (req, res) => {
  res.json('Domain Route');
});

/*
      @access      : public
      @description : returns domain with matching id
  */
router.get('/:id', (req, res) => {
  res.json('Domain Route');
});

/*
      @access      : public
      @description : returns all domain specific cookies
  */
router.get('/:id/cookies', (req, res) => {
  res.json('Domain Route');
});

/*
      @access      : public
      @description : returns  all of domain and category specific cookies
  */
router.get('/:id/:category', (req, res) => {
  res.json('Domain Route');
});

module.exports = router;
