const express = require('express');

const router = express.Router();

/*
    @access      : public
    @description : returns all of users cookies
*/
router.get('/', (req, res) => {
  res.json('Cookie Route');
});

/*
    @access      : private
    @description : adds cookie to user's account
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
  res.json('Cookie Route');
});

/*
    @access      : public
    @description : displays all of users ad targeting  cookies
*/
router.get('/adtargeting', (req, res) => {
  res.json('Cookie Route');
});

/*
    @access      : public
    @description : displays all of users social media cookies
*/
router.get('/socialmedia', (req, res) => {
  res.json('Cookie Route');
});

/*
    @access      : public
    @description : displays all of users functional cookies
*/
router.get('/functional', (req, res) => {
  res.json('Cookie Route');
});

module.exports = router;
