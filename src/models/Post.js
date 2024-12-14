import {Sequelize,DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  },
  // userId: {
  //   type: DataTypes.INTEGER,
  // },
});

export default Post;
