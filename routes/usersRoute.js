const express = require("express");
var mongoose = require("mongoose");

const router = express.Router();
const User = require("../models/userModel");

router.get("/:id", async (req, res) => {
  const idd = req.params.id;
  console.log(idd);
  //var id = mongoose.Types.ObjectId(idd);
  // var id = new Mongo.ObjectID(idd);
  //   console.log(idd);
  //   console.log(id);
  // const data = await User.findOne({ _id: id });
  //   console.log(data.username);
  // res.send(data.username);
  res.send("hey");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      console.log("ASD");
      res.send(user);
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const newuser = new User(req.body);
    await newuser.save();
    res.send("User registered successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
