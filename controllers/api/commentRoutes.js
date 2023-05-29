const express = require('express')
const router = express.Router()
const {Post , Comment} = require('../../models')


router.post('/', async (req,res)=>{
    try{
        console.log(req.body);
        const commentData = await Comment.create({
            
            user_id: req.session.userId,
            username : req.session.username,

            notes: req.body.text,
            topic_id : req.body.topic_id
    })
        res.status(200).json(commentData)
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

router.get("/", async (req, res) => {
    try {
      const commentData = await Comment.findAll();
  
      const comment = commentData.map((comment) => comment.get({ plain: true }));
  
      res.json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  




module.exports = router