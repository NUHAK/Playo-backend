const asyncHandler =require('express-async-handler')

//@desc  Get goals
//@route Get /api/goals
//@access Private 

const getGoals= asyncHandler(async (req,res)=>{
    res.status(200).json({message:'GET GOALS'});
})

//@desc  Set goals
//@route Put /api/goals/:id
//@access Private 

const setGoals= asyncHandler(async (req,res)=>{
   if(!req.body.text){
       res.status(400)
        throw new Error('Please add a text field')
   }

    res.status(200).json({message:'SET GOAL'});
})

//@desc  Update goals
//@route Put /api/goals
//@access Private 

const updateGoals=asyncHandler( async (req,res)=>{
    res.status(200).json({message:`UPDATE GOALS  ${req.params.id}`});
})

//@desc  Delete goals
//@route DELETE /api/goals/:id
//@access Private 

const deleteGoals= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`DELETE GOALS  ${req.params.id}`});
})


module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}