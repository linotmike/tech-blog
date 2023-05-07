const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model{}


Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: false

     },
     post_id: {
        type: DataTypes.INTEGER,
        allowNull:false
        
     }
},{
    sequelize
})

  module.exports = Comment

  