//          /api/users
const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController'); // import the exported functions

// GET                          
router.route('/')                               // /api/users/
    .get(getUsers)                              // calls for all users
    .post(createUser)                           // creates new user
// GET by _id                   
router.route('/:userId')                        // /api/users/:userId
    .get(getSingleUser)                         // calls for single user
    .put(updateUser)                            // updates single user
    .delete(deleteUser)                         // deletes single user

// Reactions
router.route('/:userId/friends')                // /api/users/:userId/friends
    .post(addFriend)                            // adds new friend

router.route('/:userId/friends/:friendsId')     // /api/users/:userId/friends/:friendsId
    .delete(deleteFriend)                       // deletes single friend

module.exports = router;