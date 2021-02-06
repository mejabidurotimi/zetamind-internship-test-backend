// Import required dependencies
const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  studentNo: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  studentClass: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentsSchema);
