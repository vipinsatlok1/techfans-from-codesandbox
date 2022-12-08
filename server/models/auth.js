const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: Number,
    email: String,
    password: {
      type: String,
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", schema);
