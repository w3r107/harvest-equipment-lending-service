const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db");
app.use(express.json());
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/otp/", require("./routes/otpRoutes"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

const path = require("path");
app.use(express.static(path.join(__dirname, "client/build")));

// if (process.env.NODE_ENV === "production") {

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});
// }

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
