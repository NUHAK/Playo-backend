const express = require('express')
const router=express.Router()
const {getAllTurfs,getTurf,getTurfByDistrict,setTurf,updateturf,deleteTurf,} =require('../controllers/turfController')

router.route('/').get(getAllTurfs).post(setTurf)
router.route('/:id').delete(deleteTurf).patch(updateturf).get(getTurf)
router.route('/bydistrict/:id').get(getTurfByDistrict)

module.exports=router;