const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  getUser,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", authUser);
router.route("/signup").post(registerUser);
router.route("/:number").get(protect, getUser);

module.exports = router;
