const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  BookingId: { type: String, required: true, unique: true }, // Unique booking identifier
  StartDate: { type: Date, required: true }, // Start date of the booking
  EndDate: { type: Date, required: true }, // End date of the booking
  NoOfPersons: { type: Number, required: true, min: 1 }, // Number of persons for the booking
  NoOfRooms: { type: Number, required: true, min: 1 }, // Number of rooms booked
  TypeOfRoom: { type: String, required: true, enum: ["Single", "Double", "Suite"] }, // Room type
});

module.exports = mongoose.model("Booking", bookingSchema);
