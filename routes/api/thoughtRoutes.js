//          /api/thoughts
const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thoughtController');    // import thought functions

// GET
// GET by _id
// POST
// PUT update by _id
// DELETE remove by _id

module.exports = router;