const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);

app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  throw new HttpError("This route cannot be found", 404);
});

app.use((err, req, res, next) => {
  if (res.headerSent) {
    next(err);
  } else {
    res.status(err.code || 500);
    res.json({ message: err.message || "There was an internal server error" });
  }
});

mongoose
  .connect(
    "mongodb+srv://user1-for-places-app:password1230@cluster0.cm4ce.mongodb.net/places-app-mern?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the Database!");
    app.listen(5000);
  })
  .catch((err) => console.log(err));
