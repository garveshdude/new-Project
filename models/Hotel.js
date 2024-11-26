const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: String,
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
});

const hotelSchema = new mongoose.Schema({
  HotelName: { type: String, required: true },
  Description: { type: String, required: true },
  Amenities: { type: String, required: true },
  PhoneNo: { type: Number, required: true },
  Address: { type: String, required: true },
  Reviews: [reviewSchema], // Array of reviews
});

module.exports = mongoose.model("Hotel", hotelSchema);
