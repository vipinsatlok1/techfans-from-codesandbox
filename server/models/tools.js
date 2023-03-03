const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: String,
    dec: String,
    totalLikes: Number,
    likes: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
      },
    ],
    totalRating: Number,
    ratings: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        rating: Number,
      },
    ],
    svg: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "toolsCategory",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tools", schema);
