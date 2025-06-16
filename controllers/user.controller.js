const { userService } = require('../services');

const addUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      message: 'User created successfully',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to create user',
      error: err.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      message: 'Users retrieved successfully',
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to fetch users',
      error: err.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json({
      message: 'User retrieved successfully',
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to fetch user',
      error: err.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({
      message: 'User updated successfully',
      data: updated,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to update user',
      error: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({
      message: 'User deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to delete user',
      error: err.message,
    });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
