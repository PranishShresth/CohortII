const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello from the other side");
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
