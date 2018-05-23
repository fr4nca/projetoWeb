const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/config");
const cors = require("cors");
const api = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "/dist")));

//Config mongoose
mongoose.connect(keys.localhost);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});
db.on("error", err => {
  throw err;
});

app.use("/api", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}`));
