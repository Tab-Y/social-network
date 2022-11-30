//          /api/users
const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController'); // import the exported functions

// GET all users
// get single user by _id
// POST new user
// PUT update user by _id
// DELETE remove user by _id  <BONUS> remove thoughts when deleted (CASCADE DELETE)

// 

module.exports = router;