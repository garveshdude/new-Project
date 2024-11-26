const Review = require("../models/review");

const submitReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review submitted successfully.", review });
  } catch (error) {
    res.status(500).json({ message: "Error submitting review.", error });
  }
};

const getReviews = async (req, res) => {
  try {
    const { hotelId } = req.query;
    const reviews = await Review.find(hotelId ? { hotelId } : {});
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews.", error });
  }
};

module.exports = { submitReview, getReviews };
