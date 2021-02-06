// Import required dependencies
const mongoose = require("mongoose");

const staffSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  staffNo: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  level: { type: String, required: true },
  classHeld: { type: String },
});

module.exports = mongoose.model("Staff", staffSchema);
