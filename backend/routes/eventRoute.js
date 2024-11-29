const express = require("express");
const router = express.Router();
const { createEvent } = require("../controllers/eventController");

router.post("/admin/event/create", createEvent);

// router.post("/admin/login", loginAdmin);

// router.patch("/admin/update/:id", updateAdminPassword);

// router.get("/users", getUsers);

// router.get("/users/:id", getSingleUser);

// router.delete("/users/:id", deleteUser);

module.exports = router;
