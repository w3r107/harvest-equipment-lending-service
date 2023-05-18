const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://tushar02:qwer1234@cluster0.29wve03.mongodb.net/?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );

    const connection = await mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo DB Connection Successfull");
    });
    connection.on("error", () => {
      console.log("Mongo DB Connection Error");
    });
  } catch (e) {
    console.log(e);
  }
}

connectDB();

module.exports = mongoose;
