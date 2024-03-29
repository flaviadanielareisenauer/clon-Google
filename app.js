const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.listen(3000, () => {
  console.log("El servidor está funcionando en http://localhost:3000");
});