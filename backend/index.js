const express = require("express");
const adminRoute = require("./routes/adminRoute");
const dbConnect = require("./config/dbConect");
const cors = require("cors");
// const cloudinaryConfig = require("./config/cloudinaryConfig");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", adminRoute);
// app.use("/api/v1", blogRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
  dbConnect();
  //   cloudinaryConfig();
});
