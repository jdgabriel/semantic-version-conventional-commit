const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ hello: "world" });
});

app.get("/new-route", (res, res) => {
  res.status(200).json({ new: "route" });
});

app.listen(3000);
