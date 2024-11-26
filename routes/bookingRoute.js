const express = require("express");
const { bookRoom, rescheduleBooking, cancelBooking, getRoom } = require("../controllers/bookingController");
const router = express.Router();

router.get("/",getRoom);
router.post("/", bookRoom);
router.put("/:bookingId", rescheduleBooking);
router.delete("/:bookingId", cancelBooking);

module.exports = router;
