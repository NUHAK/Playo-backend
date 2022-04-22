const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  turfId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  slotId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("Bookings", bookingSchema);
