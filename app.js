const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/build", express.static("build"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🔥 Scheduler is running on PORT ${PORT}`);
});
