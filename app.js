const express = require("express")
const app = express()
const conectDB = require("./config/config")
const cors = require("cors")



app.use(express.static("./public"))//public folderilillathinellam ./ itta kanan pattum
app.use(express.urlencoded({ extended: false }))//req.body kittanay
app.use(express.json())//json data work cheyyan vendi(req.res)
app.use(cors())

const tAskRouter = require('./routes/task')
app.use("/api/v1", tAskRouter)





const port = 3000
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        conectDB()
        console.log("server is liseing port 3000");
    }
})