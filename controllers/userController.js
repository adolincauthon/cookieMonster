const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../schemas/User');
const createToken = require('../utils/createToken');
const { create } = require('../schemas/User');

const postUser = async (req, res) => {
  const { email, password } = req.body;

  //hash password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      try {
        const check = await User.findOne({ email: email });
        if (check) {
          console.log(check);
          throw 'User already exists, try to login';
        }
        //create and save user
        let result = false;
        const user = new User({
          email: email,
          password: hash,
          salt: salt,
          domains: [],
        });

        try {
          result = await user.save();
        } catch (error) {
          console.log(error);
          throw 'Error saving user';
        }

        if (result === user) {
          //return token
          const token = createToken(user);

          res.status(200).json({
            token: token,
            expiresIn: Number(process.env.TOKEN_EXP),
          });
        } else {
          throw 'Error Saving User';
        }
      } catch (e) {
        next(e);
      }
    });
  });
};

const getUser = async (req, res) => {
  const { email, password, salt } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(403).json({ error: 'Invalid Credentials' });
  }
  const result = await bcrypt.compare(password, user.password);

  if (result) {
    const token = createToken(user);
    res.status(200).json({
      token: token,
      expiresIn: process.env.TOKEN_EXP,
    });
  } else {
    res.status(403).json({ error: 'Invalid Credentials' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email, password, salt } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(403).json({ error: 'Invalid Credentials' });
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
    } else {
      res.status(403).json;
    }
  } catch (error) {}
};

module.exports = {
  postUser,
  getUser,
};
