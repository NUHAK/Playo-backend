const mongoose =require('mongoose')

const goalSchema =mongoose.Schema({
    image1:{
        type:String,
        required:[true]
    },
    image2:{
        type:String,
        required:[true]
    },
    name: {
        type: String,
        required:[true]
    },
    Ownername: {
        type: String,
        required:[true]
    },
    OwnerPhoneNumber: {
        type: String,
        required:[true]
    },
    district: {
        type: String,
        required: [true]
    },
    post: {
        type: Number,
        required: [true]
    },
    pincode: {
        type: Number,
        required: [true]
    },
    discription: {
        type: String,
        required: [true]
    },
    type: {
        type: String,
        required: [true]
    },
    Size: {
        type: Number,
        required: [true]
    },
},
    {
        timestamp: true,
    }
)

mongoose.exports=mongoose.model('Goal',goalSchema)
