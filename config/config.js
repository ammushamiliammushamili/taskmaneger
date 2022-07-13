const mongoose = require("mongoose")
async function conectDB() {
    await mongoose.connect("mongodb+srv://shamili:123@cluster0.tm05h.mongodb.net/tasks?retryWrites=true&w=majority");
    console.log("Db connected");
}
module.exports = conectDB