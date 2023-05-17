const router = require('express').Router();


const userRoutes = require('./userRoute');
const postRoutes = require("./postRoutes");
const topicRoutes = require("./topicRoutes");
const commentRoutes = require('./commentRoutes')






router.use('/users', userRoutes);
router.use("/posts", postRoutes);
router.use("/topics", topicRoutes);
router.use('/comments', commentRoutes)



module.exports = router;
