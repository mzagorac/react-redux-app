const mongoose = require("mongoose");
const config = require("../config/mongo.config");

mongoose.connect(config.getUrl(), { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Successfuly connected to mongodb");
});

module.exports = db;
