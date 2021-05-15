const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const {User, Post} = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    // create the users
  });

  for (const post of postData) { // goes through the post data
    await Post.create({ // create posts
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      // set the user_Id to random users created. 
    });
  }

  process.exit(0);
};

seedDatabase();
