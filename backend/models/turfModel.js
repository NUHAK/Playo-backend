const mongoose = require('mongoose')


const turfSchema = mongoose.Schema({

    district: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'District',
    },
    ownerid:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    img1: {
        type: String,
        // required: true,
    },
    img2: {
        type: String,
        // required: true,
    },
    turfname: {
        type: String,
        required: true,
    },
    ownername: {
        type: String,
        required: true,
    },
    ownernmbr: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        // required: true,
    },
    post: {
        type: String,
        required: true,
    },
    pinnumber: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Turf', turfSchema)