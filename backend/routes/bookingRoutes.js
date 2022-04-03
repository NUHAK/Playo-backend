const express = require("express");
const router = express.Router();
const {
  getAllBookings,
  createBooking,
} = require("../controllers/bookingController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getAllBookings);
router.route("/").post(createBooking);

module.exports = router;
