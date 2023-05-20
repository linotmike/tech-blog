const User = require('./User');   
const Post = require('./post');
const Comment = require('./comment');
const Topic = require('./topic');


User.hasMany(Topic, {
    foreignKey: "user_id",
  });
 Topic.belongsTo(User, {
    foreignKey: "user_id",
 });
 Topic.hasMany(Post, {
    foreignKey: "topic_id",
 });
Post.belongsTo(Topic, {
    foreignKey: "topic_id",
  });
  
  
Post.belongsTo(User,{
    foreignKey: 'user_id'
});
User.hasMany(Post,{
    foreignKey: 'user_id'
});
Comment.hasMany(Topic,{
    foreignKey: 'topic_id'
})
Topic.hasMany(Comment,{
    foreignKey: 'topic_id'
})
Comment.hasMany(Topic,{
    foreignKey: 'topic_id'
})
Comment.belongsTo(Post,{
    foreignKey: 'post_id'
});
Post.hasMany(Comment,{
    foreignKey: 'post_id'
});

 module.exports= {User,Post,Comment,Topic}

