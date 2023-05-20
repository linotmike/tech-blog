const express = require('express')
const router = express.Router()
const {Post ,Topic} = require('../../models')


router.get('/',async (req,res)=>{
    try{
        const topicData = await Topic.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(topicData)
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router