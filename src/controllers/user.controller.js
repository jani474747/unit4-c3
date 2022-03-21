const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/user.model");

const router = express.Router();

// firstName (string, required, minimum length 3 and maximum length 30)
// lastName (string, optional, if given then minimum length 3 and maximum length 30)
// age (integer, required, should be between 1 and 150)
// email (string, required, unique)
// profileImages: (array of imageUrls and atleast 1 profile image is required)
// timestamps (string, required)

router.post(
  "/",
  body("firstName")
    .not()
    .isEmpty()
    .withMessage("FirstName cannot be left blank")
    .custom((value) => {
      if (value.length >= 3 && value.length <= 30) {
        throw new Error(
          "FirstName of the length must be between 3 and 30 characters."
        );
      }
      return true;
    }),
  body("lastName").custom((value) => {
    if (value.length >= 3 && value.length <= 30) {
      throw new Error(
        "LastName of the length must be between 3 and 30 characters."
      );
    }
    return true;
  }),
  body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be left blank")
    .isNumeric()
    .withMessage("Age must be in numbers")
    .custom((value) => {
      if (value >= 1 && value <= 150) {
        throw new Error(
          "Name of the length must be between 3 and 30 characters."
        );
      }
      return true;
    }),
  body("profileImages")
    .not()
    .isEmpty()
    .withMessage("ProfileImages cannot be left blank"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const user = await User.create(req.body);
      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error.message });
    }
  }
);

module.exports = router;
