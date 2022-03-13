const asyncHandler = require('express-async-handler')
const { json } = require('express/lib/response')
const District = require('../models/districtModel')


//@desc  Get districts
//@route Get /api/districts
//@access Public 

const getAllDistricts = asyncHandler(async (req, res) => {
    try {
        const districts = await District.find()
        res.json(districts)
    } catch (err) {
        res.send('Error' + err)
    }
})

//@desc  Get district
//@route Get /api/districts/:id
//@access Public 

const getDistrict = asyncHandler(async (req, res) => {
    try {
        const district = await District.findById(req.params.id)
        res.json(district)
    } catch (err) {
        res.send('Error' + err)
    }
})

//@desc  Set districts
//@route Post /api/districts/
//@access Public 

const setDistricts = asyncHandler(async (req, res) => {


    const district = new District({
        name: req.body.name,
        shortform: req.body.shortform,

    })
    try {
        const a1 = await district.save()
        res.json(a1)

    } catch (err) {
        res.send('Error')
    }


})
//@desc delete district
//@route Patch /api/districts
//@access Public

const deleteDistrict = asyncHandler(async (req, res) => {
    try {
        const district = await District.findById(req.params.id)
        const a1 = await district.remove()
        res.json(a1)

    } catch (err) {
        res.send('Error')
    }


})


module.exports = {
    getAllDistricts,
    getDistrict,
    setDistricts,
    deleteDistrict,


}