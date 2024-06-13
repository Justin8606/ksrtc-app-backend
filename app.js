const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const bcryptjs = require("bcryptjs")


const user = require("./models/user")
const {userModel} = require("./models/user")

const app = express()

const generateHashedPassword = async(password)=>{
    const salt = await bcryptjs.genSalt(10)
    return bcryptjs.hash(password,salt)  
}

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://justin:nitsuj21@cluster0.3jf2qw3.mongodb.net/tiketappdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/signup",async(req,res)=>{
    let input = req.body

    let hashedPassword = await generateHashedPassword(input.password)
    input.password = hashedPassword

    let user = new userModel(input)
    user.save()
    // console.log(input)
    // res.send("signup page")
    console.log(user)
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("Server started")
})