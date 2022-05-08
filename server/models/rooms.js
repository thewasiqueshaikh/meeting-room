const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('rooms', roomsSchema);  