const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const user = require("./models/user")
const {userModel} = require("./models/user")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/signup",(req,res)=>{
    let input = req.body
    let user = new userModel(input)
    // console.log(input)
    // res.send("signup page")
    console.log(user)
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("Server started")
})