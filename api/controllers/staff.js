// Import dependencies
const mongoose = require("mongoose");

const Complaint = require("../models/complaints");

// (POST) save a new complaint
exports.postComplaint = (req, res, next) => {
  const complaint = new Complaint({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
  });

  complaint
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((e) => throwError(e));
};

// (GET) retrieve all complaints
exports.getComplaints = (req, res, next) => {
  Complaint.find()
    .sort({ numberOfLikes: -1 })
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        complaints: docs,
      };
      console.log(response);
      res.status(200).json(response);
    })
    .catch((e) => throwError(e));
};

// // (GET) retrieve single complaint
// exports.getSingleComplaint = (req, res, next) => {
//   const id = req.params.complaintId;
//   Complaint.findById(id)
//     .exec()
//     .then((doc) => {
//       console.log(doc);
//       res.status(200).json(doc);
//     })
//     .catch((e) => throwError(e));
// };

// // (UPDATE) complaint
// exports.updateComplaint = (req, res, next) => {
//   const id = req.params.complaintId;

//   const updateOps = {};
//   for (const ops of req.body) {
//     updateOps[ops.propName] = ops.value;
//   }

//   Complaint.update({ _id: id }, { $set: updateOps })
//     .exec()
//     .then((result) => {
//       console.log(result);
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });
// };

// // DELETE complaint
// exports.deleteComplaint = (req, res, next) => {
//   const id = req.params.complaintId;
//   Complaint.deleteOne({ _id: id })
//     .exec()
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((e) => throwError(e));
// };

// Error function
throwError = (e) => {
  console.log(e);
  res.status(500).json({ error: e });
};
