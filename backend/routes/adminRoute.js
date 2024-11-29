const express = require("express");
const router = express.Router();
const {
  createAdmin,
  loginAdmin,
  updateAdminPassword,
  //   getSingleUser,
  //   updateUser,
  //   deleteUser,
} = require("../controllers/adminController");

router.post("/admin/create", createAdmin);

router.post("/admin/login", loginAdmin);

router.patch("/admin/update/:id", updateAdminPassword);

// router.get("/users", getUsers);

// router.get("/users/:id", getSingleUser);

// router.delete("/users/:id", deleteUser);

module.exports = router;
