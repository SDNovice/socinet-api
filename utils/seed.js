const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { usernames, userEmails} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const username = usernames;
  const email = userEmails;

  users.push({
    username,
    email,
  });
  // await User.collection.createIndexes(users);
  console.log(users);
  
  // const thoughts = [];

  // for (let i = 0; i < 20; i++) {
 

  //   users.push({
     
  //   });
  // }

  // await User.collection.insertMany(users);
  // console.log(users);
});