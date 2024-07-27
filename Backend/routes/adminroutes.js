const express = require('express');
const router = express.Router();
const UserDetails = require('../model/user');
const Project = require('../model/project')

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
// router.get('/allusers', async (req, res) => {
//   try {
//     const users = await UserDetails.find().populate('projects');
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// });

router.get('/allusers', async (req, res) => {
  try {
    const projectsByUser = await Project.aggregate([
      {
        $group: {
          _id: '$createdBy',
          projects: {
            $push: {
              title: '$title',
              tagline: '$tagline',
              description: '$description',
              targetAmount: '$targetAmount',
              pledgedAmount: '$pledgedAmount',
            }
          }
        }
      }
    ]);

    res.json({ projectsByUser });
  } catch (error) {
    console.error('Error fetching projects by user:', error);
    res.status(500).json({ error: 'Failed to fetch projects by user' });
  }
});

module.exports = router;
