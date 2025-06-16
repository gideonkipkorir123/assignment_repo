const { User } = require('../models');
const bcrypt = require('bcryptjs');
const createUser = async (userData) => {
  // Check for existing user (optional but recommended)
  const existing = await User.findOne({ email: userData.email });
  if (existing) {
    throw new Error('User already exists with this email');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  // Replace plain password with hashed version
  const user = new User({
    ...userData,
    password: hashedPassword
  });

  return await user.save();
};

const getUserById = async (id) => {
  return await User.findById(id).select('-password');
};

const getAllUsers = async () => {
  return await User.find().select('-password');
};

const updateUser = async (id, updates) => {
  return await User.findByIdAndUpdate(id, updates, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
