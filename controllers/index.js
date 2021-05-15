const router = require('express').Router();
const apiRoutes = require('./api');
const blogRoutes = require('./blog_routes');

router.use('/api', apiRoutes);
router.use(blogRoutes)

module.exports = router;
