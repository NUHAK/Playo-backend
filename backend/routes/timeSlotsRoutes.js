const express = require("express");
const router = express.Router();
const { getTimeSlots } = require("../controllers/timeSlotsController");

router.get("/:turfId", getTimeSlots);

module.exports = router;
