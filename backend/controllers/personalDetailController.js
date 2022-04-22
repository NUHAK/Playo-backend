const { json } = require('express/lib/response')

const asyncHandler = require('express-async-handler')

const PersonalDetail = require('../models/personalDetailModel')
const User = require('../models/userModel')



//@desc  Get personalDetails
//@route Get /api/personalDetails/id
//@access Private
const getpersonalDetails = asyncHandler(async (req, res) => {
    try {
        // const personalDetails = await PersonalDetail.findById(req.params.id)
        const personalDetails = await PersonalDetail.find({userid:(req.params.id)})
        res.json(personalDetails)
    } catch (err) {
        res.send('Error' + err)
    }
});

//@desc  Set personalDetails
//@route Post /api/personalDetails/
//@access Private 

const setpersonalDetails = asyncHandler(async (req, res) => {
    const personalDetails = new PersonalDetail ({

        profileimage:req.body.profileimage,
        userid:req.body.userid,
        name: req.body.name,
        phonenmbr: req.body.phonenmbr,
        email: req.body.email,
        address: req.body.address,
    })
    try {
        const a1 = await personalDetails.save()
        await User.findByIdAndUpdate(req.body.userid,{status:"filled"})
        res.json(a1)

    } catch (err) {
        res.send('Error')
    }


})

//@desc  Update personalDetails
//@route Patch /api/personalDetails/:id
//@access Private 
const updatepersonalDetails=asyncHandler(async(req,res)=>{
    try{
        const personalDetails=await PersonalDetail.findById(req.params.id)
        personalDetails.profileimage=req.body.profileimage
        personalDetails.name=req.body.name
        personalDetails.phonenmbr=req.body.phonenmbr
        personalDetails.email=req.body.email
        personalDetails.address=req.body.address

        const a1=await personalDetails.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})
//@desc delete personalDetails
//@route Delete /api/personalDetails/:id
//@access Public

const deletepersonalDetails = asyncHandler(async (req, res) => {
    try {
        const personalDetails = await PersonalDetail.findById(req.params.id)
        const a1 = await personalDetails.remove()
        res.json(a1)

    } catch (err) {
        res.send('Error')
    }


})


module.exports = {
    getpersonalDetails,
    setpersonalDetails,
    updatepersonalDetails,
    deletepersonalDetails,
    


}