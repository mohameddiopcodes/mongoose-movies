module.exports = {
    new: newMovie,
    create
}

const Movie = require('../models/Movie')

function newMovie(req, res) {
    res.render('movies/new')
}

function create(req, res) {
    req.body.nowShowing = !!req.body.nowShowing
    req.body.cast = req.body.cast.trim()
    
    if(req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/)
    const movie = new Movie(req.body)
    movie.save(function(err) {
        if(err) return res.render('movies/new')
    })
}