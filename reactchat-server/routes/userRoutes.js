const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  addContact,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", authUser);
router.route("/signup").post(registerUser);

// body:
// - callerID: caller _id
// - contactNumber: new contact contactNumber

router.route("/").post(protect, addContact);

module.exports = router;
