// Import required dependencies
const express = require("express");
const router = express.Router();

// Import controller file
const StudentsController = require("../controllers/students");

// (POST) save a new student to the database
router.post("/", StudentsController.addStudent);

// (GET) retrieve all students from the database
router.get("/", StudentsController.getStudents);

module.exports = router;
