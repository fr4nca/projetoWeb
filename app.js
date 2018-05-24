const express = require("express");
const path = require("path");
const cors = require("cors");
const api = require("./routes/api");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/dist")));

app.use("/api", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}`));
