const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");

router.get("/getallcars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addcar", async (req, res) => {
  try {
    console.log(req.body);
    // const data = req.body;
    // const newcar = new Car();
    // const newcar = new Car({this.name:req.body,this.nameOfDriver:});
    console.log(typeof req.body.phoneNo);
    const newcar = new Car({
      name: req.body.name,
      nameOfDriver: req.body.nameOfDriver,
      phoneNo: req.body.phoneNo,
      nameOfShop: req.body.nameOfShop,
      phoneNoShop: req.body.phoneNoShop,
      address: req.body.address,
      city: req.body.city,
      image: req.body.image,
      capacity: req.body.capacity,
      fuelType: req.body.fuelType,
      rentPerHour: req.body.rentPerHour,
    });
    await newcar.save();
    // await Car.create(req.body);
    // const newbooking = new Booking({});
    // await newbooking.save();

    res.send("Car added successfully");
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

router.post("/editcar", async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.body._id });
    car.name = req.body.name;
    car.image = req.body.image;
    car.fuelType = req.body.fuelType;
    car.rentPerHour = req.body.rentPerHour;
    car.capacity = req.body.capacity;

    await car.save();

    res.send("Car details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deletecar", async (req, res) => {
  try {
    await Car.findOneAndDelete({ _id: req.body.carid });

    res.send("Car deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
