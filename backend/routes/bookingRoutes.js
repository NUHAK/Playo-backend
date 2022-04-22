const express = require("express");
const router = express.Router();
const {
  getAllBookings,
  createBooking,
  getBookedBy,
  deleteBooking,
} = require("../controllers/bookingController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getAllBookings);
router.route("/").post(createBooking);
router.route("/:id").delete(deleteBooking);
router.route('/bookedby/:id').get(getBookedBy);

module.exports = router;
