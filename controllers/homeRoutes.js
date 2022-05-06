const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogsRawData = await Blog.findAll({
            include: [{
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['comment_text', 'user_id', 'date_created']
            }
            ]
        });

        const blogs = blogsRawData.map(blog => blog.get({ plain: true }));
        res.json(blogs);
    } catch (err) {
        if (err) {
            res.json(err);
        }
    }
});

module.exports = router;