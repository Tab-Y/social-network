const { User, Reaction, Thought } = require('../models');      // models for required 

module.exports = { 
    // GET all thoughts                         // as shown in assignment 26
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // get single thought by id                 // as shown in assignment 26
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')                     // mongoose version flag
        .then((thoughts) => 
        !thoughts ? res.status(404).json({ message: 'There seems to be no thoughts here'}) : res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // POST new thought                         // as shown in assignment 26
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    // PUT update thought                       // as shown in assignment 26
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body }, 
            { runValidators: true, new: true },
        )
        .then((user) => 
        !user ? res.status(404).json({ message: 'These thoughts have wandered off.'}) : res.status(200).json({ message: "This thought has been refreshed."})
        )
        .catch((err) => res.status(500).json(err));
    },
    // DELETE thought                           // as shown in assignment 26
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thoughts) => 
        !thought ? res.status(404).json({ message: 'Thoughts not found'}) : Reaction.deleteMany({ _id: { $in: thoughts.reactions }}))
        .then(res.status(200).json({ message: "Empty head syndrome. Thoughts destroyed."}))
        .catch((err) => res.status(500).json(err));
    },
    // add reactions to thoughts                // demonstrated in assignment 24
    addReaction(req, res) {         
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true },
        )
        .then((reaction) => 
        !reaction ? res.status(404).json({ message: 'Reaction not found'}) : res.status(200).json({ message: "Reaction adjusted."}))
        .catch((err) => res.status(500).json(err));
    },
    // delete the reaction                      // mongodb documentation
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { reactions: { reactionId: req.body.reactionId } }}, 
            { runValidators: true, new: true },
        )
        .then((reaction) => 
        !reaction ? res.status(404).json({ message: 'Reaction not found'}) : res.status(200).json({ message: "Reaction redacted."}))
        .catch((err) => res.status(500).json(err));
    }
 };