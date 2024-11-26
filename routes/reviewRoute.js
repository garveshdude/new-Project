const express = require("express");
const { submitReview, getReviews } = require("../controllers/reviewController");
const router = express.Router();

router.post("/", submitReview);
router.get("/", getReviews);

module.exports = router;
