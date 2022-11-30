const connection = require('../config/connection');
const { Reaction, Thought, User } = require('../models');      // models
const { userSeed, thoughtSeed } = require('./data');         // data to be seeded

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connection established');

    await User.deleteMany({});                          // clears existing collection

    await Thought.deleteMany({});                       // clears existing collection

    await User.collection.insertMany(userSeed);         // inserts user seed data into collection

    await Thought.collection.insertMany(thoughtSeed);   // inserts thought seed data into collection

    console.info('Seeds planted.');
    process.exit(0);
})