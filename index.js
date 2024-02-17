const express = require("express")
const cors = require("cors")
require("dotenv").config()
const {connection} = require("./db/db")
const {ScoreModel} = require("./model/score")

const app = express()

app.use(express.json())

app.use(cors())

app.post("/",async(req,res) =>{
 
   try {
    console.log(req.body)
    const data = await ScoreModel.create(req.body)

    await data.save()
    res.send(data)
   } catch (error) {
    console.log(error.message)
   }
    
})


app.get("/",async(req,res)=>{
    const data = await ScoreModel.find()
    res.json({data})
  })

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
    console.log("connected to server")
})
