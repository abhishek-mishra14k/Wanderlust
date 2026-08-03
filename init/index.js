require("dotenv").config();

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const mongo_url = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6a31334a97c5b93032274fb3" // Replace with actual user ID
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();