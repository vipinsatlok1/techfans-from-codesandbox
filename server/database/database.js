const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose
      .set("strictQuery", false)
      .connect(
        "mongodb+srv://vipin:vipin@cluster0.09zoa4v.mongodb.net/techfans?retryWrites=true&w=majority"
      );
    console.log("database connected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDb;
