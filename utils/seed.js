const connection = require('../config/connection');
const {  } = require('../models');      // models
const {  } = require('./data');         //functions

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connection established');

    // the functions of seeding

    console.info('Seeds planted.');
    process.exit(0);
})