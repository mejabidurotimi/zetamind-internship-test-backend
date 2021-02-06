// Import required dependencies
const express = require("express");
const router = express.Router();

// Import controller file
const StaffController = require("../controllers/staff");

// (POST) save a new staff to the database
router.post("/", StaffController.addStaff);

// (GET) retrieve all staff from the database
router.get("/", StaffController.getStaff);

module.exports = router;
