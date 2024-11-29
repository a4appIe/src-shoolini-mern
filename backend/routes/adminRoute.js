const express = require("express");
const router = express.Router();
const {
  createAdmin,
  loginAdmin,
//   getUsers,
//   getSingleUser,
//   updateUser,
//   deleteUser,
} = require("../controllers/adminController");

router.post("/admin/create", createAdmin);

router.post("/admin/login", loginAdmin)

// router.get("/users", getUsers);

// router.get("/users/:id", getSingleUser);

// router.patch("/users/:id", updateUser);

// router.delete("/users/:id", deleteUser);

module.exports = router;
