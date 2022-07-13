const mongoose = require("mongoose")
let TaskSchema = mongoose.Schema({
    taskDescription: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    },
})
const Taskmodel = mongoose.model('task', TaskSchema)
module.exports = Taskmodel