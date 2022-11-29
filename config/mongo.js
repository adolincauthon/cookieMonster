const dotenv = require('dotenv');
const mongoose = require('mongoose');

const mongoConnect = async () => {
  try {
    const mongo = await mongoose.connect(process.env.MONGO_STRING);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log($`Database connection error: {error}`);
    process.exit(1);
  }
};

module.exports = mongoConnect;
