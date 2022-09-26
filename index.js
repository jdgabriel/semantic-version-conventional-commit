const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ hello: "world" });
});

app.get("/home", (res, res) => {
  res.status(200).json({ route: "home" });
});

app.get("/posts", (res, res) => {
  res.status(200).json({ route: "posts" });
});

app.get("/users", (res, res) => {
  res.status(200).json({ route: "users" });
});

app.listen(3000);
