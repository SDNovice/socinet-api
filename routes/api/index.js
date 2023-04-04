const router = require('express').Router();
const thoughtRoutes = require('./thoughtsRoutes');
const usersRoutes = require('./usersRoutes');

// router.use('/thoughts', thoughtRoutes);
router.use('/users', usersRoutes);

module.exports = router;
