// requiring the express methods to create custom routes
const express = require("express");
const router = express.Router();
const {getpersonalDetails,setpersonalDetails,updatepersonalDetails,deletepersonalDetails}=require('../controllers/personalDetailController')

router.get('/:id',getpersonalDetails)
router.post('/',setpersonalDetails)
router.patch('/:id',updatepersonalDetails)
router.delete('/:id',deletepersonalDetails)





module.exports=router