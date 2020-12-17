//FILENAME : db.js

const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://abdullah-task:Click@123@cluster0.mmlea.mongodb.net/node-auth?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
