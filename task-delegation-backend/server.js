const app = require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
    console.log("Mongo URI loaded:", process.env.MONGO_URI);

    process.exit(1);
  });
