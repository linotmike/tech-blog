const User = require('./User');
const Comment = require('./comment');
const Blog = require('./blog');

Blog.belongsTo(User,{
    foreignKey: 'user_id'
});
User.hasMany(Blog,{
    foreignKey: 'user_id'
});
Blog.belongsTo(Comment,{
    foreignKey: 'post_id'
});
Comment.hasMany(Blog,{
    foreignKey: 'post_id'
});

module.exports= {User,Comment,Blog}