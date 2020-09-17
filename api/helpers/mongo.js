const mongoose = require('mongoose');
const { mongoURL } = require('../config');

const checkConnection = () => mongoose.connection.readyState;

const connectToDatabase = async () => {
  try {
    if (!checkConnection()) {
      console.log('Connecting to database');
      await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
    }
    console.log('Connected to database, connection state', checkConnection());
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToDatabase };
