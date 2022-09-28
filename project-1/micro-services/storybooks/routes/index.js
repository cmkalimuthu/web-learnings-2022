const express=require('express')
const router=express.Router()
const {ensureAuth,ensureGuest} = require('../middlewares/auth')
const Story=require('../models/Story')

//@desc Login/Landing page
//@desc GET /
router.get('/',ensureGuest,(req,res,next)=>{
    res.render('login',{layout:'login'})
})

//@desc Dashboard
//@desc GET /dashboard
router.get('/dashboard',ensureAuth,async(req,res,next)=>{
    try {
        const stories= await Story.find({user:req.user.id}).lean()
        res.render('dashboard',{name:req.user.displayName,stories})
    } catch (err) {
        console.log(err)
        res.render('error/500')
    }
    
})

module.exports=router;
