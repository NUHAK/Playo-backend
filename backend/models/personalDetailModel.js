const mongoose =require('mongoose')

const personalDetailsSchema =mongoose.Schema({
     profileimage:{
         type:String,
     },
     name:{
         type:String,
         required:true,
     },
     phonenmbr:{
         type:Number,
        // required:true,
     },
     email:{
         type:String,
         required:true,
     },
     address:{
         type:String,
         required:true,
     },
     userType:{
         type:String,
         required:true,

     }
    })
module.exports=mongoose.model('PersonalDetails',personalDetailsSchema)