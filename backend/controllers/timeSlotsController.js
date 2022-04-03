const TimeSlots = require("../models/timeSlotsModel");
const asyncHandler = require("express-async-handler");
const Bookings = require("../models/bookingModel");

const getTimeSlots = asyncHandler(async (req, res) => {
  const turfId = req.params.turfId;
  try {
    const bookings = await Bookings.find({ turfId: turfId });

    const turfBookings = bookings.filter((booking) => booking.turfId == turfId);

    const timeSlots = await TimeSlots.find();

    const emptyTimeSlots = [];

    for (let j = 0; j < timeSlots.length; j++) {
      for (let i = 0; i < turfBookings.length; i++) {
        if (timeSlots[j]._id !== turfBookings[i].slotId) {
          emptyTimeSlots.push(timeSlots[i]);
        }
      }
    }
    res.send(emptyTimeSlots);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = {
  getTimeSlots,
};
