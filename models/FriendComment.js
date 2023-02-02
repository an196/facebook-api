const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendCommentSchema = new Schema({
    _idPost: {
        type: String,
        require: true,
    },
    _idUser:{
        type: String,
        require: true,
    },
    username:{
        type: String,
        require: true,
    },
    imgProfile:{
        type: String,
        require: true,
    },
    timeComment:{
        type: String,
        require: true,
    },
    content:{
        type: String,
        require: true,
    },
    sticker:{
        type: Object,
        require: false,
    },
    video:{
        type: Object,
        require: false,
    },
    gif:{
        type: Object,
        require: false,
    },
    reply:{
        type: Array,
        require: false,
    },

})

module.exports = mongoose.model('FriendComment', friendCommentSchema);