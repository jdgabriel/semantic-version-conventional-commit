const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ hello: "world" });
});

app.get("/home", (res, res) => {
  // whatever bug fix
  // whatever bug fix
  return res.status(200).json({ route: "home" });
});

app.get("/posts", (res, res) => {
  // whatever bug fix
  return res.status(200).json({ route: "posts" });
});

app.get("/users", (res, res) => {
  return res.status(200).json({ route: "users" });
});

app.listen(3000);
