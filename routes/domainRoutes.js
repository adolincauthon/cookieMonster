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
  res.json('Cookie Route');
});

/*
      @access      : public
      @description : returns cookie with matching id
  */
router.get('/:id', (req, res) => {
  res.json('Cookie Route');
});

/*
      @access      : public
      @description : displays all of users strictly necessary cookies
  */
router.get('/strictlynecessary', (req, res) => {
  res.json('Domain Route');
});

/*
      @access      : public
      @description : displays all of users ad targeting  cookies
  */
router.get('/adtargeting', (req, res) => {
  res.json('Domain Route');
});

module.exports = router;
