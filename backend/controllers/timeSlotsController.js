const TimeSlots = require("../models/timeSlotsModel");
const asyncHandler = require("express-async-handler");
const Bookings = require("../models/bookingModel");

const getTimeSlots = asyncHandler(async (req, res) => {
  const turfId = req.params.turfId;
  try {
    let bookings = await Bookings.find({ turfId: turfId });

    let timeSlots = await TimeSlots.find();
    // console.log(timeSlots && timeSlots._id);
    const bookedSlots = (bookings.map((booking) => booking.slotId.valueOf()));
    // console.log(bookedSlots[0].valueOf());
    const unbookedSlots = timeSlots.filter((time)=>!bookedSlots.includes(time._id.valueOf()));
    // console.log(unbookedSlots);

    res.send(unbookedSlots);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = {
  getTimeSlots,
};
