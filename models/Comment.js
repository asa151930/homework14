const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    post_Id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id'
    },
  },
},
  {
    sequelize,
    modelName: 'comment',
    freezeTableName: true
  }
);

module.exports = Comment;
