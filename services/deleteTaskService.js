const { TaskModel } = require("../models");

module.exports = async function deleteTaskController(id) {
  return TaskModel.deleteOne({ _id: id });
};
