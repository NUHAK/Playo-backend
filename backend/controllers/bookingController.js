const Bookings = require("../models/bookingModel");
const asyncHandler = require("express-async-handler");

const getAllBookings = asyncHandler(async (req, res) => {
  try {
    const bookings = await Bookings.find();
    res.json(bookings);
  } catch (err) {
    res.send("Error" + err);
  }
}); 

const createBooking = asyncHandler(async (req, res) => {
  const booking = new Bookings({
    ...req.body,
  });
  try {
    const res = await booking.save();
    res.send("Booking success");
  } catch (err) {
    res.send(err);
  }
});

module.exports = {
  getAllBookings,
  createBooking,
};
