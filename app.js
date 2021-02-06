// Import dependencies
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const studentsRoute = require("./api/routes/students");
const staffRoute = require("./api/routes/staff");

// Mongo DB
mongoose
  .connect(
    process.env.MONGODB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/staff", staffRoute);
app.use("/api/students", studentsRoute);

// Handle errors
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

module.exports = app;
