const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emojiSchema = new Schema({
    image: {
        type: String,
        require: true,
    },
})

module.exports = mongoose.model('Gif', emojiSchema);