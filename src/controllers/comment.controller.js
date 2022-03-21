const express = require("express");
const { body, validationResult } = require("express-validator");
const Comment = require("../models/comment.model");

const router = express.Router();

//     body ( string, required)
// timestamps (string, required)

router.post(
  "/",
  body("body").not().isEmpty().withMessage("body cannot be left blank"),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const user = await Comment.create(req.body);
      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error.message });
    }
  }
);

module.exports = router;
