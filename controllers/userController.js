const { User, Reaction, Thought } = require('../models');      // models for required 

module.exports = { 
    // get all users                    // as shown in assignment 26
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // gets single user                 // as shown in assignment 26
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')                 // mongoose version flag
        .then((user) => 
        !user ? res.status(404).json({ message: 'User not found'}) : res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // creates new user                 // as shown in assignment 26
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },
    // updates existing user            // as shown in assignment 26
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },         // what is being looked for
            { $set: req.body },                 // updates to include
            { runValidators: true, new: true },
        )
        .then((user) => 
        !user ? res.status(404).json({ message: 'User not found'}) : res.status(200).json({ message: "This user has been made anew."})
        )
        .catch((err) => res.status(500).json(err));
    },
    // deletes a user                   // as shown in assignment 26
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => 
        !user ? res.status(404).json({ message: 'User not found'}) : Thought.deleteMany({ _id: { $in: user.thoughts }}))
        .then(res.status(200).json({ message: "This user and their thoughts are no more."}))
        .catch((err) => res.status(500).json(err));
    },
    // Adds (updates) a new friend          // demonstrated in assignment 24
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body.friends }},            // adds friend to list
            { runValidators: true, new: true },
        )
        .then((user) => 
        !user ? res.status(404).json({ message: 'User not found'}) : res.status(200).json({ message: "This user has a new friend."})
        )
        .catch((err) => res.status(500).json(err));
    },
    // Removes friend                       // mongodb documentation
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.body.friends }},                // removes friend from list
            { runValidators: true, new: true },
        )
        .then((user) => 
        !user ? res.status(404).json({ message: 'User not found'}) : res.status(200).json({ message: "This user lost an old friend."})
        )
        .catch((err) => res.status(500).json(err));
    }

 };