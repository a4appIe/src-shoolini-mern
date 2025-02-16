const express = require("express");
const router = express.Router();
const {
  createEvent,
  updateEvent,
  getEvents,
  getSingleEvent,
  deleteSingleEvent,
} = require("../controllers/eventController");
const upload = require("../config/multer");
const verifyUser = require("../middlewares/auth");

router.post(
  "/event/create",
  verifyUser,
  upload.fields([
    { name: "cover_image", maxCount: 1 },
    { name: "speakers", maxCount: 20 },
  ]),
  createEvent
);

// router.post("/admin/login", loginAdmin);

router.patch("/event/update/:id", verifyUser, updateEvent);

router.get("/event", getEvents);

router.get("/event/:id", getSingleEvent);

router.delete("/event/:id", verifyUser, deleteSingleEvent);

// router.delete("/users/:id", deleteUser);

module.exports = router;
