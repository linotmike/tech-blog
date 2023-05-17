const express = require('express')
const router = express.Router()
const {Post , Comment} = require('../../models')


// router.post('/', async (req,res)=>{
//     try{
//         const commentData = await Comment.create(req.body
//             // ...req.body,
//             // // user: req.body.userId,
//             // // username : req.body.username
//             // notes: req.body.notes,
//             // post_id : req.body.post_id
//         )
//         res.status(200).json(commentData)
//     } catch(err){
//         console.log(err);
//         res.status(500).json(err)
//     }
// })
router.post("/", async (req, res) => {
    try {
      const commentData = await Comment.create({
        ...req.body,
        user_id: req.session.userId,
        username: req.session.username,
      });
      res.status(200).json(commentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
router.get('/',(req,res)=>{
    Comment.findAll().then((comment)=>{
        res.json(comment)
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({msg:"err err err"})
    })
   
})





module.exports = router