const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./post_routes');

router.use('/users', userRoutes);
router.use('/projects', postRoutes);

module.exports = router;
