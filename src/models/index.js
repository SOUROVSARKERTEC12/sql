import User from './User.js';
import Post from './Post.js';
import sequelize from '../config/config.js';




sequelize.sync().then(() => {
    console.log('Database synchronized');
  }).catch((error) => {
    console.error('Error synchronizing database:', error);
  });

export { User, Post };