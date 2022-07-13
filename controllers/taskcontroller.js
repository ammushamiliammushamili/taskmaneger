const res = require("express/lib/response");
const Taskmodel = require("../models/task-model");

const sendHi = (req, res) => {
    console.log("hi");
    res.send("hi")
}
const shamili = (req, res) => {
    console.log("hi");
    res.send("shamili")
}
const creatTask = async (req, res) => {
    //create a task in the database using the data from req.body//
    await Taskmodel.create(req.body)
    res.json({ success: true, msg: "successfully add tasks" })
}
const getTask = async (req, res) => {
    let tasks = await Taskmodel.find({})
    res.json({ tasks, success: true, msg: " successfully all fetch tasks" })
};
const deleteTask = async (req, res) => {
    await Taskmodel.findOneAndDelete({ _id: req.params.id })
    res.json({ success: true, msg: "successfully delete tasks" })

}
const editTask = async (req, res) => {
    await Taskmodel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.json({ success: true, msg: "successfully update" })
}
const singleTask = async (req, res) => {
    console.log(req.params.id);

    let task = await Taskmodel.findOne({ _id: req.params.id })
    res.json({ success: true, msg: "collected task", task })

}
const taskComplete = async (req, res) => {
    await Taskmodel.findOneAndUpdate({ _id: req.params.id }, { status: "completed" })
    res.json({ success: true, msg: "complete successfully" })
}


module.exports = { sendHi, shamili, creatTask, getTask, deleteTask, editTask, singleTask, taskComplete };