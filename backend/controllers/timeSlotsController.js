const TimeSlots = require("../models/timeSlotsModel");
const asyncHandler = require("express-async-handler");
const Bookings = require("../models/bookingModel");

const getTimeSlots = asyncHandler(async (req, res) => {
  const turfId = req.params.turfId;
  try {
    let bookings = await Bookings.find({ turfId: turfId });

    // const bookings = bookings.filter((booking) => booking.turfId == turfId);

    let timeSlots = await TimeSlots.find();
    // console.log(timeSlots && timeSlots._id);

    const emptyTimeSlots = timeSlots.filter((timeSlot) => {
      return !bookings.some((booking) => {
        return timeSlot._id === booking.slotId;
      });
    });
    // console.log(emptyTimeSlots);

    // const emptyTimeSlots = bookings.filter((booking) => {
    //   return !timeSlots.some((timeSlot) => {
    //     return booking.slotId === timeSlot._id;
    //   });
    // });

    res.send(emptyTimeSlots);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = {
  getTimeSlots,
};
