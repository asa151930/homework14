const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  try { // send the post here 
    const newPost = await Post.create({ // it will be new post
      ...req.body,
      user_Id: req.session.user_Id,
    });

    res.status(200).json(newPost); // if everything works, result: 200
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const PostData = await Post.destroy({
      where: {
        id: req.params.id,
        user_Id: req.session.user_Id,
      },
    });

    if (!PostData) {
      res.status(504).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
