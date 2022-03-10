const mongoose =require('mongoose')

const goalSchema =mongoose.Schema(
    {
     user:{
         type: mongoose.Schema.Types.ObjectId,
         required : true,
         ref:'User',
     },
    text:{
        type:String,
        required:[true,'Please add a value']
    },
    
    image1:{
        type:String,
        //required:[true,'Please add a value']
    },
    image2:{
        type:String,
       // required:[true,'Please add a value']
    },
    name: {
        type: String,
       // required:[true,'Please add a value']
    },
    Ownername: {
        type: String,
       // required:[true,'Please add a value']
    },
    OwnerPhoneNumber: {
        type: String,
       // required:[true,'Please add a value']
    },
    district: {
        type: String,
        //required: [true,'Please add a value']
    },
    post: {
        type: Number,
       // required: [true,'Please add a value']
    },
    pincode: {
        type: Number,
       // required: [true,'Please add a value']
    },
    discription: {
        type: String,
       // required: [true,'Please add a value']
    },
    type: {
        type: String,
       // required: [true,'Please add a value']
    },
    Size: {
        type: Number,
       // required: [true,'Please add a value']
    },
},
    {
        timestamp: true,
    }
)

module.exports=mongoose.model('Goal',goalSchema)
