const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear()
        }
    },
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
})

module.exports = mongoose.model('Movie', movieSchema)