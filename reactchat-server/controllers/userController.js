const asyncHandler = require("express-async-handler");
const generateToken = require("../config/jwt");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Field/s missing");
  }
  // @TODO improve error message on frontend (send error message json)
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email already in use");
  }
  const user = await User.create({
    name,
    email,
    password,
    contactNumber: Math.floor(Math.random() * 1000000000).toString(),
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      contactNumber: user.contactNumber,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create an user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).populate("contacts", [
    "name",
    "contactNumber",
  ]);
  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // TODO replace user IDs with userObj{name, number}
      contacts: user.contacts,
      contactNumber: user.contactNumber,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});
// in case of repeated call while logged in
const getContacts = asyncHandler(async (req, res) => {
  const callerID = req.body.callerID;
  const user = await User.findById(callerID).populate("contacts", [
    "name",
    "contactNumber",
  ]);
  res.status(200).json({
    data: user,
  });
});

const addContact = asyncHandler(async (req, res) => {
  const cNumber = req.body.contactNumber;

  console.log("cnumber", cNumber);
  const user = await User.findOne({
    contactNumber: cNumber,
  });

  if (user) {
    await User.updateOne(
      { _id: req.body.callerID },
      { $push: { contacts: user } }
    );
    res.status(200).json({
      name: user.name,
      contactNumber: user.contactNumber,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

module.exports = {
  registerUser,
  authUser,
  addContact,
  getContacts,
};
