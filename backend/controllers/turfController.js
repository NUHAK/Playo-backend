const asyncHandler = require('express-async-handler')
const { json } = require('express/lib/response')
const Turf = require('../models/turfModel')
const User = require('../models/userModel')

//@desc  Get all turf
//@route Get /api/turfs
//@access Public 

const getAllTurfs = asyncHandler(async (req, res) => {
    try {
        const turfs = await Turf.find()
        res.json(turfs)
    } catch (err) {
        res.send('Error' + err)
    }
})

//@desc  Get turf by district
//@route Get /api/turfs/id
//@access Public 

const getTurfByDistrict = asyncHandler(async (req, res) => {
   
    try {
        const turf = await Turf.find({'district':(req.params.id)})
        res.json(turf)
    } catch (err) {
        res.send('Error' + err)
    }
})
//@desc  Get turf by ownerid
//@route Get /api/turfs/byuser/id
//@access Public 
const getTurfByUser = asyncHandler(async (req, res) => {
   
    try {
        const turf = await Turf.find({ownerid:(req.params.id)})
      res.json(turf)
    } catch (err) {
        res.send('Error' + err)
   }
})
 
//@desc  Get turf ld
//@route Get /api/turfs/:id
//@access Public 

const getTurf = asyncHandler(async (req, res) => {
    try {
        const turf = await Turf.findById(req.params.id)
        res.json(turf)
    } catch (err) {
        res.send('Error' + err)
    }
})

//@desc  Set turf
//@route Post /api/turfs/
//@access Public 

const setTurf = asyncHandler(async (req, res) => {


    const turf = new Turf({
        img1:req.body.img1,
        img2:req.body.img2,
        turfname:req.body.turfname,
        ownername:req.body.ownername,
        ownernmbr:req.body.ownernmbr,
        ownerid:req.body.ownerid,
        district:req.body.district,
        address:req.body.address,
        post:req.body.post,
        pinnumber:req.body.pinnumber,
        type:req.body.type,
        size:req.body.size,
        discription:req.body.discription,
    })
    try {
        const a1 = await turf.save()
        await User.findByIdAndUpdate(req.body.ownerid,{status:"filled"});
        res.json(a1);
    } catch (err) {
        res.send(err)
    }
})

//@desc  Update turfDetails
//@route Patch /api/turf/:id 
const updateturf=asyncHandler(async(req,res)=>{
    try{
        const turf=await Turf.findById(req.params.id)
        turf.img1=req.body.img1
        turf.img2=req.body.img2
        turf.turfname=req.body.turfname
        turf.ownername=req.body.ownername
        turf.district=req.body.district
        turf.address=req.body.address
        turf.post=req.body.post
        turf.pinnumber=req.body.pinnumber
        turf.type=req.body.type
        turf.size=req.body.size
        turf.discription=req.body.discription
        
        const a1=await personalDetails.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})

//@desc delete turf
//@route Delete /api/turf/:id


const deleteTurf = asyncHandler(async (req, res) => {
    try {
        const turf = await Turf.findById(req.params.id)
        const a1 = await turf.remove()
        res.json(a1)

    } catch (err) {
        res.send('Error')
    }


})

module.exports = {
    getAllTurfs,
    getTurf,
    getTurfByDistrict,
    setTurf,
    updateturf,
    deleteTurf, 
    getTurfByUser,
}


