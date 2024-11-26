const Hotel = require("../models/Hotel");

const getHotels = async (req, res) => {
  try {
    const { city } = req.query;
    const hotels = await Hotel.find(city ? { city } : {});
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels.", error });
  }
};

module.exports = { getHotels };
