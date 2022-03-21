const express = require("express");
const { body, validationResult } = require("express-validator");
const Book = require("../models/book.model");

const router = express.Router();

//     likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)

router.post(
  "/",
  body("coverImage")
    .not()
    .isEmpty()
    .withMessage("profileImage cannot be left blank"),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const user = await Book.create(req.body);
      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error.message });
    }
  }
);

module.exports = router;
