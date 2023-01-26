const express = require('express');
const router = express.Router();
const friendCommentController = require('../../controllers/friendCommentController');

router.route('/')
    .get(friendCommentController.getFriendComments)
    .post(friendCommentController.addFriendComment)
    .delete(friendCommentController.deleteFriendComment);

module.exports = router;