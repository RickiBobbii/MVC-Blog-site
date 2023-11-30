//Grab User model to add relations
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./comment');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});



module.exports = { User, Blog, Comment };