const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: String,
  hotelId: mongoose.Schema.Types.ObjectId,
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
});

module.exports = mongoose.model("review", reviewSchema);
