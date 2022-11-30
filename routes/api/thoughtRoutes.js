//          /api/thoughts
const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thoughtController');    // import thought functions

// GET                          
router.route('/')                                   // /api/thoughts/
    .get(getThoughts)                               // calls for all thoughts
    .post(createThought)                            // creates new thought
// GET by _id                   
router.route('/:thoughtId')                         // /api/thoughts/:thoughtId
    .get(getSingleThought)                          // calls for single thought
    .put(updateThought)                             // updates single thought
    .delete(deleteThought)                          // deletes single thought

// Reactions
router.route('/:thoughtId/reactions')               // /api/thoughts/:thoughtId/reactions
    .post(addReaction)                              // adds new reaction
    .delete(removeReaction)                         // deletes single reaction


module.exports = router;