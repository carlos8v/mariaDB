const express = require("express");
const router = express.Router();
const {
  getAUser,
  getUsers,
  postUser,
  updateUser,
  delUser,
} = require("../controllers/usersControllers");

router.route("/api/users").get(getUsers).post(postUser);
router.route("/api/users/:id").put(updateUser);
router.route("/api/users/:username").delete(delUser).get(getAUser);

module.exports = router;