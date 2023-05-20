const router = require('express').Router();
const userRoutes = require('./userRoute');
const commentRoutes = require('./commentRoutes')

const postRoutes = require("./postRoute");
const topicRoutes = require("./topicRoute");






router.use('/users', userRoutes);
router.use("/posts", postRoutes);
router.use("/topics",topicRoutes); 
router.use('/comments', commentRoutes)



module.exports = router;
