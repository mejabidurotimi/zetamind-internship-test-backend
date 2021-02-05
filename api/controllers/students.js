// Import dependencies
const mongoose = require("mongoose");

const Student = require("../models/students");

// (POST) save a new student
exports.addStudent = (req, res, next) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    studentNo: req.body.studentNo,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    class: req.body.class,
  });

  student
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((e) => throwError(e));
};

// (GET) retrieve all students
exports.getStudents = (req, res, next) => {
  Student.find()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((e) => throwError(e));
};

// Error function
throwError = (e) => {
  console.log(e);
  res.status(500).json({ error: e });
};
