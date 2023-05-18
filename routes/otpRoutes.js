const express = require("express");
const router = express.Router();

const otp = require("../models/otpVerify");

const accountSid = "AC763bf0fc727b22802ad475257e51d62b";
const authToken = "4eeac5af47622abdc63c1560e6b913ea";
const client = require("twilio")(accountSid, authToken);

router.post("/verify", async (req, res) => {
  try {
    const xx = req.body.num;
    let randN = Math.floor(Math.random() * 90000 + 10000);

    client.verify.v2
      .services("/verify")
      .verificationChecks.create({ to: "+15017122661", code: "123456" })
      .then((verification_check) => console.log(verification_check.status));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
