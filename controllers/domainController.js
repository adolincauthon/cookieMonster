const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { reset } = require('nodemon');
const User = require('../schemas/User');
const Domain = require('../schemas/Domain');

//req will contain user object from middleware
const getDomains = async (req, res) => {
  domains = {};
  console.log(req.user.domains);
  req?.user?.domains.forEach((domain) => {
    domains[domain.id] = domain.name;
  });
  res.status(200).json(domains);
};

const postDomain = async (req, res, next) => {
  const { name } = req.body;
  const domain = new Domain({
    name,
    user: req.user.id,
    cookies: [],
  });
  try {
    const postedDomain = await domain.save();
    console.log(typeof postedDomain.id);
    if (domain == postedDomain) {
      try {
        await User.findByIdAndUpdate(req.user.id, {
          domains: [
            ...req.user.domains,
            { id: postedDomain._id, name: postedDomain.name },
          ],
        });
      } catch (error) {
        await Domain.findByIdAndDelete(postedDomain);
        console.log(error.stack);
        next('Error updating user domain, did not add domain');
      }
      res.status(200).json(postedDomain);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDomains,
  postDomain,
};
