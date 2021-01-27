const { urlencoded } = require("express");
const express = require("express");
const students = require("./students.json");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  res.json(students.find((students) => students.id === req.params.id));
});

app.post("/students", (req, res) => {
  students.push(req.body);
  res.status(201); // created
  res.json(req.body);
});

app.put("/students/:id", (req, res) => {
  const updateIndex = students.findIndex(
    (students) => students.id === req.params.id
  );
  res.json(Object.assign(students[updateIndex], req.body));
});

app.delete("/students/:id", (req, res) => {
  const delIndex = students.findIndex(
    (students) => students.id === req.params.id
  );
  students.splice(delIndex, 1);
  res.status(204).send()
});

app.listen(1000, () => {
  console.log("Start server at port 1000");
});
