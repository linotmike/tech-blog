const express = require('express');
const router = express.Router();
const {Post,Comment} = require('../models')


router.get('/',(req,res)=>{
    Post.findAll(
        {
            include: Comment,
        }
    ).then(post=>{
        res.render('home')
    })
   
})
router.get('/login',(req,res)=>{
    
       
        
    
        res.render('login')
})


module.exports = router;
