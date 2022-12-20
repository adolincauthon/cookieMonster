const express = require('express');
const { getDomains, postDomain } = require('../controllers/domainController');
const decodeToken = require('../middleware/decodeToken');

const router = express.Router();

/*
    @access      : public
    @description : returns all of users domains
*/
router.get('/', decodeToken, getDomains);

/*
      @access      : private
      @description : adds domain to user's account
*/
router.post('/', decodeToken, postDomain);

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
      @access    od  : public
      @description : returns  all of domain and category specific cookies
  */
router.get('/:id/:category', (req, res) => {
  res.json('Domain Route');
});

module.exports = router;
