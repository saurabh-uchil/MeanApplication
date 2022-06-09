const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playersSchema = new Schema({
    fname:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    club:{
        type: String,
        required: true
    },
    player_position:{
        type: String,
        required: true
    }
}, {timestamps:true});

const Player = mongoose.model('Player', playersSchema)

module.exports = Player