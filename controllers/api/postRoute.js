// const { request } = require('express');
const express = require('express');
const router = express.Router();
const{User,Post,Comment} = require('../../models');


router.post('/', async(req,res)=>{
    try{
        console.log(req.body); 
        const postData = await Post.create ({
            ...req.body,
            user_id: req.session.userId,
            username : req.session.username



        })
        res.status(200).json(postData)
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/', async (req,res)=>{
    try{
        const postData = await Post.findAll({
            include: Comment,
        })
        const post = postData.map((post)=>post.get({plain:true}))
        res.json(post)
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router