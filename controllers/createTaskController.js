const { createTaskService } = require("../services");

module.exports = async function createTaskController(req, res) {
  await createTaskService(req.body);
  return res.send(200);
};
