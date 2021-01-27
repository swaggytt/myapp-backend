const express = require("express");
const students = require("./students.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola");
});

router.get("/students", (req, res) => {
  res.json(students);
});

router.get("/students/:id", (req, res) => {
  res.json(students.find((students) => students.id === req.params.id));
});

router.post("/students", (req, res) => {
  students.push(req.body);
  res.status(201); // created
  res.json(req.body);
});

router.put("/students/:id", (req, res) => {
  const updateIndex = students.findIndex(
    (students) => students.id === req.params.id
  );
  res.json(Object.assign(students[updateIndex], req.body));
});

router.delete("/students/:id", (req, res) => {
  const delIndex = students.findIndex(
    (students) => students.id === req.params.id
  );
  students.splice(delIndex, 1);
  res.status(204).send();
});

module.exports = router;
