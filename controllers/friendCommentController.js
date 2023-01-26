const FriendComment = require('../models/FriendComment');

const getFriendComments = async (req, res) => {
    const friendComments = await FriendComment.find();
    if (!friendComments) return res.status(204).json({ message: 'No friend comment found' });
    res.json(friendComments);
};

const addFriendComment = async (req, res) => {
    const newFriendComment = new FriendComment({  ...req.body});
   
    try {
        const savedFriendComment = await newFriendComment.save();
        res.status(200).json(savedFriendComment);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteFriendComment = async (req, res) => {
}

const updateFriendComment = async (req, res) => {
}

module.exports = {
    getFriendComments,
    addFriendComment,
    deleteFriendComment,
    updateFriendComment
};