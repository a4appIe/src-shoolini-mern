const express = require("express");
const router = express.Router();
const verifyUser = require("../middlewares/auth");
const {
  createAdmin,
  loginAdmin,
  updateAdminPassword,
  getAdmin,
} = require("../controllers/adminController");

router.post("/admin/create", createAdmin);

router.post("/admin/login", loginAdmin);

router.patch("/admin/update/:id", verifyUser, updateAdminPassword);

router.get("/admin", getAdmin);

// router.get("/users/:id", getSingleUser);

// router.delete("/users/:id", deleteUser);

module.exports = router;
