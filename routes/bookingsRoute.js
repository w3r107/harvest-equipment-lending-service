const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51IYnC0SIR2AbPxU0EiMx1fTwzbZXLbkaOcbc2cXx49528d9TGkQVjUINJfUDAnQMVaBFfBDP5xtcHCkZG1n1V3E800U7qXFmGf"
);
router.post("/bookcar", async (req, res) => {
  const { token } = req.body;

  if (token) {
    try {
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });

      const payment = await stripe.charges.create(
        {
          amount: req.body.totalAmount * 100,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
        },
        {
          idempotencyKey: uuidv4(),
        }
      );
      if (payment) {
        req.body.transactionId = payment.source.id;
        const newbooking = new Booking(req.body);
        await newbooking.save();
        const car = await Car.findOne({ _id: req.body.car });
        console.log(req.body.car);
        car.bookedTimeSlots.push(req.body.bookedTimeSlots);

        await car.save();
        res.send("Your booking is successfull");
      } else {
        console.log(error);
        res.send("something went wrong");
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  } else {
    // req.body.transactionId = payment.source.id;
    const newbooking = new Booking(req.body);
    await newbooking.save();
    const car = await Car.findOne({ _id: req.body.car });
    console.log(req.body.car);
    car.bookedTimeSlots.push(req.body.bookedTimeSlots);

    await car.save();
    res.send("Your booking is successfull");
  }
});

router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car").populate("user");
    res.send(bookings);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/delete", async (req, res) => {
  // try {
  //   console.log(req.body);
  //   res.send(req.body);
  // } catch (error) {
  //   return res.status(400).json(error);
  // }
  try {
    console.log(req.body.carid);
    await Booking.findOneAndDelete({ _id: req.body.carid });

    res.send("Car deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
