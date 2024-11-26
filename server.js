const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/hotels", require("./routes/HotelRoute"));
app.use("/api/bookings", require("./routes/bookingRoute"));
app.use("/api/reviews", require("./routes/reviewRoute"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
