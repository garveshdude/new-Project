const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserId: { type: String, required: true, unique: true }, 
  Name: { type: String, required: true }, 
  Address: { type: String, required: true }, 
  EmailId: { type: String, required: true, unique: true, match: /\S+@\S+\.\S+/ }, 
  PhoneNo: { type: Number, required: true, unique: true, minlength: 10 }, 
  Password: { type: String, required: true },
  UserBookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking", 
    },
  ], 
});

module.exports = mongoose.model("User", userSchema);
