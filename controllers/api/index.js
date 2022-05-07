const router = require('express').Router();

const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./blogRoutes');


router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/blogs', blogRoutes);


module.exports = router;
