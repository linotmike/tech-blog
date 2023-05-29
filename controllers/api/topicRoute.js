const express = require('express')
const router = express.Router()
const {Post ,Topic} = require('../../models')


router.post('/',async (req,res)=>{
    try{
        console.log(req.session);
        const topicData = await Topic.create({
            ...req.body,
            user_id: req.session.userId
        })
        res.status(200).json(topicData)
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})
router.get('/',async (req,res)=>{
    try{
        console.log(req.session);
        const topicData = await Topic.findAll({
           
            user_id: req.session.userId
        })
        res.status(200).json(topicData)
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router