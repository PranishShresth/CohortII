const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const fs = require("fs");

app.use(express.json());

app.get("/", function (req, res) {
  fs.readFile("./package.json", { encoding: "utf-8" }, function (err, data) {
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
