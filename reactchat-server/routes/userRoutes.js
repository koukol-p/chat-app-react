const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  addContact,
  getContacts,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", authUser);

router.route("/signup").post(registerUser);

// body:
// - callerID: caller _id
// - contactNumber: new contact contactNumber
router.route("/contact").post(protect, addContact);
// body:
// - callerID: caller _id
router.route("/contacts").post(protect, getContacts);

module.exports = router;
