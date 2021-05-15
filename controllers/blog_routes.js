const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({ // hold the line here 
            include: [User] // until this returns 
            
        });
        const all_posts = postData.map(post => post.get({plain: true}));

        // loop over the posts, map over and create a new array called post that will contain the actual posts
        res.render('home', {all_posts})
    } catch (error) { // if there is an issue
        res.status (504).json(error);
    }
});

router.get('/post/:id', async (req, res) => {
// show the comments for the post
});

router.get('/login', async (req, res) => {

});

// router.get('/logout', async (req, res) => {

// });


router.get('/signup', async (req, res) => {

});