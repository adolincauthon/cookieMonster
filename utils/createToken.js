const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const jwtSecret = process.env.JWT_SECRET;
  const data = {
    email: user.email,
    id: user.id,
    expiresIn: 1000 * 60 * 60,
  };

  return jwt.sign(data, jwtSecret);
};

module.exports = createToken;
