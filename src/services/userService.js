const User = require('../models/user');

async function createUser(userData) {
   const user = new User(userData);
   await user.save();
   return user;
}

async function getUserById(userId) {
   return User.findById(userId);
}

async function updateUser(userId, userData) {
   return User.findByIdAndUpdate(userId, userData, { new: true });
}

async function deleteUser(userId) {
   return User.findByIdAndDelete(userId);
}

async function getUserList() {
   return User.find({});
}

module.exports = {
   createUser,
   getUserById,
   updateUser,
   deleteUser,
   getUserList,
};
