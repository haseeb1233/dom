const mongoose = require("mongoose")

const scoreScheme=new mongoose.Schema({
  date:{
    type:Date,
    default:Date.now()
  },
  
  scorecard:[
    {
        name:{
            type:String,
            required:true
          },
          score:{
            type:Array,
            required:true
          },
          totalscore:{
            type:Number,
            required:true
        
          },
          rank:{
            type:Number,
            required:true
          }
    }
  ]

})

const ScoreModel = mongoose.model("scores",scoreScheme)

module.exports = {ScoreModel}