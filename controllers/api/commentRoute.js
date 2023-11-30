const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//GET all comments
router.get('/', async (req, res) => {
  try {
    // Get all comments, sorted by id
    const commentData = await Comment.findAll({
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET comment by id
router.get('/:id', async (req, res) => {
try {
  const commentData = await Comment.findByPk(req.params.id, {
    include: [{ model: User }],
  });
  if (!commentData) {
    res.status(404).json({ message: 'No comment found with that id!' });
    return;
  }
  res.status(200).json(commentData);
} catch (err) {
  res.status(500).json(err);
}
});

//CREATE a comment withAuth
router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;