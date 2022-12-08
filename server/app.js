const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// // use json passer
app.use(cors({ origin: "*", credentials: true, exposedHeaders: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res
    // .cookie("techfans", "Hello From Tech Fans Site")
    .send("this is tech fans site");
});

// uses routes
const auth = require("./routes/auth");
app.use("/api/auth", auth);

// // error middleware
const error = require("./middlewares/error");
app.use(error);

module.exports = app;
