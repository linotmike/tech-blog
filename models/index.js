const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

const Topic = require("./topic");


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

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Topic.hasMany(Comment, {
  foreignKey: "topic_id",
  onDelete: 'CASCADE'
});

Comment.belongsTo(Topic, {
  foreignKey: "topic_id",
  onDelete: 'CASCADE'
});



module.exports = { User, Post, Comment, Topic};
