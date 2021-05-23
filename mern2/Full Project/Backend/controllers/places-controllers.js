const fs = require("fs");

const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const getCoordsForAddress = require("../utils/location");
const Place = require("../models/place");
const User = require("../models/user");

const getPlaceById = async (req, res, next) => {
  const pid = req.params.pid;
  let place;
  try {
    place = await Place.findById(pid);
  } catch (err) {
    return next(
      new HttpError("Error in the database while finding place", 500)
    );
  }

  if (!place) {
    return next(
      new HttpError("The place you had requested could not be found ", 404)
    );
  }

  res.json({ place: place.toObject({ getters: true }) });
};

const getPlacesByUserId = async (req, res, next) => {
  const uid = req.params.uid;

  let user;
  try {
    user = await User.findById(uid).populate("places");
  } catch (err) {
    return next(
      new HttpError(
        "Problem at the database while accessing user id. Please try again later.",
        500
      )
    );
  }

  if (!user) {
    return next(new HttpError("No user found with this Id", 422));
  }

  res.json({
    places: user.places.map((place) => place.toObject({ getters: true })),
  });

  // Another way of doing it:
  // let places;
  // try {
  //   places = await Place.find({ creator: uid });
  // } catch (err) {
  //   return next(
  //     new HttpError("Error in the database while finding place", 500)
  //   );
  // }

  // if (!places || places.length === 0) {
  //   return next(
  //     new HttpError("Places for the requested user id could not be found", 404)
  //   );
  // }

  // res.json({
  //   places: places.map((place) => place.toObject({ getters: true })),
  // });
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid Data entered. Please check your inputs.", 422)
    );
  }

  const { title, description, address } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (err) {
    return next(err);
  }

  const createdPlace = new Place({
    title,
    description,
    address,
    location: coordinates,
    creator: req.userData.userId,
    image: req.file.path,
  });

  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    return next(
      new HttpError(
        "Cannot access user at the database. Please try again later",
        500
      )
    );
  }

  if (!user) {
    return next(
      new HttpError("There is no user in the database with that id", 422)
    );
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    user.places.push(createdPlace);
    await user.save({ session: sess });
    await createdPlace.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("New Place creation failed, please try again later", 500)
    );
  }

  res.status(201).json({ place: createdPlace });
};

const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid Data entered. Please check your inputs.", 422)
    );
  }

  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    return next(
      new HttpError(
        "A problem occured while getting data from the database",
        500
      )
    );
  }

  if (place.creator.toString() !== req.userData.userId) {
    return next(
      new HttpError(
        "You are not authorized to do this because you are not the creator of the place.",
        401
      )
    );
  }

  place.title = req.body.title;
  place.description = req.body.description;

  try {
    await new Place(place).save();
  } catch (err) {
    return next(
      new HttpError("A problem occured while putting data to the database", 500)
    );
  }

  res.status(200).json({ place: place.toObject({ getters: true }) });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId).populate("creator");
  } catch (err) {
    return next(
      new HttpError(
        "There was a problem at the database. Cannot delete a place",
        500
      )
    );
  }

  if (!place) {
    return next(
      new HttpError("Cannot find the place of this id to delete", 404)
    );
  }

  if (place.creator.id.toString() !== req.userData.userId) {
    return next(
      new HttpError(
        "You are not authorized to do this because you are not the creator of the place",
        401
      )
    );
  }

  const imageUrl = place.image;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    await place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(
      new HttpError(
        "There was a problem at the database. Cannot delete a place",
        500
      )
    );
  }

  fs.unlink(imageUrl, (err) => console.log(err));

  res.status(200).json({ message: "Deleted a place" });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
