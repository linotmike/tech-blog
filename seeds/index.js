// const sequelize = require('../config/connection');
// const seedUser = require('./userData');
// const seedpost = require('./PostData');
// const seedComment = require('./commentData')

// const seedAll = async () => {
//   await sequelize.sync({ force: false });

//   // await seedUser();

//   // await seedpost();
//   await seedComment();

//   process.exit(0);
// };

// seedAll();

const sequelize = require('../config/connection')
const { Post, Topic, User, Comment} = require('../models')

// const userData = require('./userData.json')
// const topicData = require('./topicData.json')
// const postData = require('./postData.json')
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  // await User.bulkCreate(userData, {
  //   returning: true,
  // });
  // await Topic.bulkCreate(topicData, {
  //   returning: true,
  // });
  await Comment.bulkCreate(commentData, {
    returning: true,
  });
  // await Post.bulkCreate(postData, {
  //   returning: true,
  // });


  process.exit(0);
};

seedDatabase();
