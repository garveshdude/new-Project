const Booking = require("../models/Booking");

const getRoom = async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all documents in the collection
    res.status(200).json(bookings); // Return the bookings in JSON format
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
}

const bookRoom = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Room booked successfully.", booking });
  } catch (error) {
    res.status(500).json({ message: "Error booking room.", error });
  }
};

const rescheduleBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, req.body, { new: true });
    res.status(200).json({ message: "Booking rescheduled successfully.", updatedBooking });
  } catch (error) {
    res.status(500).json({ message: "Error rescheduling booking.", error });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    await Booking.findByIdAndDelete(bookingId);
    res.status(200).json({ message: "Booking cancelled successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling booking.", error });
  }
};

module.exports = { getRoom,bookRoom, rescheduleBooking, cancelBooking };
