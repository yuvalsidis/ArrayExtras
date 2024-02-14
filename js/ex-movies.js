'use strict'
var gMovies = [
    {imdb: 'tt0373889', name: 'Harry Potter', rate: 17},
    {imdb: 'tt0000004', name: 'Un bon bock', rate: 20},
    {imdb: 'tt0000003', name: 'Pauvre Pierrot', rate: 15},
   ]

function getMovieLink(imdb){
    console.log(imdb)
    const gMovie = gMovies.find((movie) => (movie.imdb === imdb))
    return `<a href="https://www.imdb.com/title/${gMovie.imdb}/">Harry Potter</a>`
}

console.log('The movie link is :', getMovieLink('tt0373889')) 

function deleteMovie(imdb){
    const gMovieIdx = gMovies.findIndex((movie) => (movie.imdb === imdb))
    console.log(gMovieIdx)
    gMovies.splice(gMovieIdx, 1)
    
}
deleteMovie('tt0000004')
console.log('The remain movies are:', gMovies)