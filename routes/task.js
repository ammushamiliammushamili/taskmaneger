
const express = require("express")

const router = express.Router()
const taskController = require("../controllers/taskcontroller")
router.get("/", taskController.sendHi)
router.get("/shamili", taskController.shamili)
router.post("/add-task", taskController.creatTask)
router.get("/get-all-tasks", taskController.getTask)
router.delete("/delete-task/:id", taskController.deleteTask)
router.patch("/edit-task/:id", taskController.editTask)
router.get("/single-task/:id", taskController.singleTask)
router.patch("/task-complete/:id", taskController.taskComplete)



module.exports = router;
