const Bookings = require("../models/bookingModel");
const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const PersonalDetails = require("../models/personalDetailModel");
const personalDetailModel = require("../models/personalDetailModel");
const slots = require("../models/timeSlotsModel");

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

//booked users list
const getBookedBy = asyncHandler(async (req, res) => {
  try {
    const turfId = req.params.id;

    const bookings = await Bookings.find({ turfId: turfId });

    const userIds = [];
    const slotIds = [];
    const bookingIds =  [];
    bookings.map(function (booking) {
      userIds.push(booking.userId);
      slotIds.push(booking.slotId);
      bookingIds.push(booking._id);
    });
    //get userDetails by userIds
    const bookedby = await personalDetailModel.find({
      userid: { $in: userIds },
    });

    //get slot by slotId
    const bookedSlot = await slots.find({ _id: { $in: slotIds } });

    //combine arrays
    const combined = bookedby.map((book,index)=>{
      return {user:book,bookingId:bookingIds[index],slot:bookedSlot[index]}
    })
    res.send(combined);
  } catch (error) {
    res.send("error" + error);
  }
});

module.exports = {
  getAllBookings,
  createBooking,
  getBookedBy,
};
