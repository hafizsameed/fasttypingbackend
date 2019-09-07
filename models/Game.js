const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    question : String,
    level : String
})

const Game = mongoose.model("Games",GameSchema);

module.exports = Game;