const express = require("express");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/todona").then(() => {
  console.log("Database connected at port 27017");
});

app.use("/api", routes);

app.listen(1000, () => {
  console.log("Start server at port 1000");
});

// localhost:1000 --> Web Server
// localhost:27017 --> MongoDB server
