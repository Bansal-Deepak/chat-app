const express = require("express");
const router = express.Router();
const User = require("../db/models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { APP_KEY } = process.env;
const { body, validationResult } = require("express-validator");

router.post(
  "/login",
  [
    body("email")
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("Please provide a valid email"),
  ],
  async (req, res) => {
    try {
      let { email, password } = req.body;
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({
          errors: errors.array().map((e) => {
            return {
              message: e.msg,
              field: e.param,
            };
          }),
        });
      }
      let result = await User.findOne({ where: { email } });
      if (!result) {
        return res.status(404).send({
          errors: [{ message: "Not Found Error" }],
        });
      }
      console.log("result.password", result.password);
      let final = await bcrypt.compare(result.password, password);
      console.log(final);
      if (!final) {
        return res.status(400).send({
          errors: [{ message: "Invalid credentials" }],
        });
      }
      let token = jwt.sign({ id: result.id }, APP_KEY);
      return res.status(200).send({ token });
    } catch (ex) {
      return res.status(500).send({
        errors: [{ message: "Something went wrong" }],
      });
    }
  }
);
router.post(
  "/register",
  [
    body("email")
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("Please provide a valid email"),
    body("password")
      .not()
      .isEmpty()
      .isLength({ min: 8 })
      .withMessage("Password should be at least 8 characters"),
    body("firstName")
      .not()
      .isEmpty()
      .trim()
      .withMessage("Please provide a value for firstName"),
    body("lastName")
      .not()
      .isEmpty()
      .trim()
      .withMessage("Please provide a value for lastName"),
    body("gender")
      .not()
      .isEmpty()
      .trim()
      .withMessage("Please provide a value for gender"),
    body("avatar")
      .not()
      .isEmpty()
      .trim()
      .withMessage("Please provide a value for avatar"),
  ],
  async (req, res) => {
    try {
      let { email, password, firstName, lastName, gender, avatar } = req.body;
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({
          errors: errors.array().map((e) => {
            return {
              message: e.msg,
              field: e.param,
            };
          }),
        });
      }
      console.log("h");
      let result = await User.findOne({ where: { email } });
      console.log("hh");
      if (result) {
        return res.status(400).send({
          errors: [{ message: "Email already in use" }],
        });
      }
      console.log("hhh");
      let newuser = await User.create({
        email,
        password,
        firstName,
        lastName,
        gender,
        avatar,
      });
      console.log("hh");
      let token = jwt.sign({ id: newuser.id }, APP_KEY, { expiresIn: 86400 });
      return res.status(200).send({ token });
    } catch (ex) {
      console.log(ex);
      return res.status(500).send({
        errors: [{ message: "Something went wrong" }],
      });
    }
  }
);

module.exports = {
  router,
};
