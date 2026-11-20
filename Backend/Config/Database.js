const mongoose = require('mongoose');

const connectionString =
  "mongodb+srv://kalrabhumika07_db_user:Node.js@cluster0.bgw5ond.mongodb.net/devTinder";

const connectDb = async () => {
  await mongoose.connect(connectionString);
};

module.exports = connectDb;

