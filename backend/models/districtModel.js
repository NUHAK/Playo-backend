const mongoose =require('mongoose')

const districtSchema =mongoose.Schema({
    name:{
        type:String,
        required: [true,'Please add a district']
    },
    shortform:{
        type:String,
        required: [true,'Please add a district shortform']
    },  
}
          
)

module.exports=mongoose.model('District',districtSchema)
