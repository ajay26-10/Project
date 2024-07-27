const express = require('express');
const router = express.Router();
const UserDetails = require('../model/user');

// Get total number of users
router.get('/totalusers', async (req, res) => {
  try {
    const userCount = await UserDetails.countDocuments();
    console.log(userCount);
    res.json({ userCount });
  } catch (error) {
    console.error('Error fetching total users:', error);
    res.status(500).json({ error: 'Failed to fetch total users' });
  }
});

// Get all users with their projects
router.get('/allusers', async (req, res) => {
  try {
    const users = await UserDetails.find().populate('projects');
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
