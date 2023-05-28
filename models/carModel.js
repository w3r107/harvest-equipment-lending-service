const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: { type: String },
    nameOfDriver: { type: String },
    phoneNo: { type: String },
    nameOfShop: { type: String },
    phoneNoShop: { type: String },
    address: { type: String },
    city: { type: String },
    phoneNoShop: { type: String },
    image: { type: String },
    capacity: { type: String },
    fuelType: { type: String },
    bookedTimeSlots: [
      {
        from: { type: String },
        to: { type: String },
      },
    ],

    rentPerHour: { type: String },
  },
  { timestamps: true }
);
const carModel = mongoose.model("cars", carSchema);
module.exports = carModel;
