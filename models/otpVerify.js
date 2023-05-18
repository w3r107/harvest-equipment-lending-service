const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    otp: { type: String },
  },
  { timestamps: true }
);

const otpModel = mongoose.model("otp", otpSchema);

module.exports = otpModel;
