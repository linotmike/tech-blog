const express = require('express');
const router = express.Router();
const {Post,Comment} = require('../models')

router.get('/',(req,res)=>{
    Post.findAll(
        {
            include: Comment,
        }
    ).then(post=>{
        res.json(post)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"err err errr",err})
    })
    
   
})


module.exports = router;
