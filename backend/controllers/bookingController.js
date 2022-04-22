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
  const personalId = await PersonalDetails.find({ userid: req.body.userId });
  // console.log(personalId);
  const { userId, turfId, slotId } = req.body;
  let bookingData = { userId, turfId, slotId };
  bookingData.userId = personalId[0]._id;
  const booking = new Bookings(bookingData);
  try {
    const data = await booking.save();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

//booked users list
const getBookedBy = asyncHandler(async (req, res) => {
  try {
    const turfId = req.params.id;

    const bookings = await Bookings.find({ turfId: turfId })
      .populate("userId")
      .populate("turfId")
      .populate("slotId");

    res.send(bookings);
  } catch (error) {
    res.send("error" + error);
  }
});

//delete booking
const deleteBooking = asyncHandler (async (req , res)=>{
  try {
    const {id} = req.params;
    const HandleDelte = await Bookings.remove({_id:id});
    res.send("deleted");
  } catch (error) {
    
  }
})

module.exports = {
  getAllBookings,
  createBooking,
  getBookedBy,
  deleteBooking
};
