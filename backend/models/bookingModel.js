const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"PersonalDetails"
  },
  turfId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"Turf"
  },
  slotId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"TimeSlots"
  },
});

module.exports = mongoose.model("Bookings", bookingSchema);
