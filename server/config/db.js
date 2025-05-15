const { connect } = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await connect(`${process.env.MONGO_DB_URL}`);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectDB };
