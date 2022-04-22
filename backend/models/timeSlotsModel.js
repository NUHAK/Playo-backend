const mongoose = require("mongoose");

const timeSlotSchema = mongoose.Schema({
  slot: {
    type: String,
  },
});

module.exports = mongoose.model("TimeSlots", timeSlotSchema);
