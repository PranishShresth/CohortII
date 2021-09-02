const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.resolve("index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
