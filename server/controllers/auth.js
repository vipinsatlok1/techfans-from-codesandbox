const model = require("../models/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");

class Auth {
  async register(req, res, next) {
    try {
      // password bcrypt
      const bcryptPassword = await bcrypt.hash(req.body.password, 10);
      const user = await model.create({
        ...req.body,
        password: bcryptPassword,
      });

      // genrate token
      const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });

      res
        .status(201)
        .cookie("auth", token, {
          maxAge: 365 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .send(user);
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      // find user in database
      const user = await model
        .findOne({ email: req.body.email })
        .select("+password");
      if (!user) return next(ErrorHandler.notFound());

      // match password
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) return next(ErrorHandler.notFound());

      // genrate token
      const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });

      res
        .status(201)
        .cookie("auth", token, {
          maxAge: 365 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .send(user);
    } catch (err) {
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
      // Iterate over the cookies and set their maxAge to 0
      Object.keys(req.cookies).forEach((cookieName) => {
        res.cookie(cookieName, "", { maxAge: 0 });
      });

      // Redirect the user to the login page
      res.send("logout successfully");
    } catch (err) {
      next(err);
    }
  }

  async getuser(req, res, next) {
    try {
      const id = req.cookies.auth;
      if (!id) return next(ErrorHandler.notAccep("not login"));

      const { _id } = jwt.verify(id, process.env.JWT_SECRET);
      if (!_id) return next(ErrorHandler.notAccep("token expired"));

      const user = model.findById(_id);
      if (!user) return next(ErrorHandler.notAccep());
      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new Auth();