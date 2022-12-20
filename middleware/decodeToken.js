const jwt = require('jsonwebtoken');
const User = require('../schemas/User');

module.exports = async (req, res, next) => {
  try {
    const token = req.get('token');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      throw 'Error with token';
    }
    next();
  } catch (error) {
    next(error);
  }
};
