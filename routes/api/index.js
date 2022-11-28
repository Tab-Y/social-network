const router = require('express').Router();
const userRoutes = require('./userRoute');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);                   // calls <application name>/api/users
router.use('/thoughts', thoughtRoutes);             // calls <application name>/api/thoughts

module.exports = router;