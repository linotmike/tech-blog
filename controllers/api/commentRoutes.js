const express = require('express')
const router = express.Router()
const {Post , Comment} = require('../../models')


router.post('/', async (req,res)=>{
    try{
        const commentData = await Comment.create({
            ...req.body,
            user: req.body.userId,
            username : req.body.username,
            notes: req.body.notes,
            post_id : req.body.post_id
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