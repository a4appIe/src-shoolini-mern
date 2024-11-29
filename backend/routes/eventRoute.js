const express = require("express");
const router = express.Router();
const { createEvent } = require("../controllers/eventController");
const upload = require("../config/multer");

router.post(
  "/admin/event/create",
  upload.fields([
    { name: "cover_image", maxCount: 1 },
    { name: "about_image", maxCount: 1 },
    { name: "host_image", maxCount: 1 },
    { name: "speakers", maxCount: 20 },
  ]),
  createEvent
);

// router.post("/admin/login", loginAdmin);

// router.patch("/admin/update/:id", updateAdminPassword);

// router.get("/users", getUsers);

// router.get("/users/:id", getSingleUser);

// router.delete("/users/:id", deleteUser);

module.exports = router;
