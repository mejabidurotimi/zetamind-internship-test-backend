// Import dependencies
const mongoose = require("mongoose");

const Staff = require("../models/staff");

// (POST) save a new complaint
exports.addStaff = (req, res, next) => {
  const staff = new Staff({
    _id: new mongoose.Types.ObjectId(),
    staffNo: req.body.staffNo,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    level: req.body.level,
    classHeld: req.body.classHeld,
  });

  staff
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((e) => console.log(e));
};

// (GET) retrieve all complaints
exports.getStaff = (req, res, next) => {
  Staff.find()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((e) => console.log(e));
};
