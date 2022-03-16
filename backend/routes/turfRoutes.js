const express = require('express')
const router=express.Router()
const {getAllTurfs,getTurf,setTurf,updateturf,deleteTurf,} =require('../controllers/turfController')

router.route('/').get(getAllTurfs,getTurf).post(setTurf)
router.route('/:id').delete(deleteTurf).patch(updateturf)

module.exports=router