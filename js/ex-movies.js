'use strict'

var gMovies = [
    { imdb: 'tt0000004', name: 'Un bon bock', rate: 20 },
    { imdb: 'tt0373889', name: 'Harry Potter', rate: 17 },
    { imdb: 'tt0000003', name: 'Pauvre Pierrot', rate: 15 },
]

console.log('getMovieLink:', getMovieLink('tt0000004'));

function getMovieLink(imdb) {
    const movieIdx = gMovies.findIndex(movie => movie.imdb === imdb)
    const movieLink = `<a href="https://www.imdb.com/title/${gMovies[movieIdx].imdb}/">${gMovies[movieIdx].name}</a`
    return movieLink
}

console.log('deleteMovie:', deleteMovie('tt0000004'));

function deleteMovie(imdb) {
    const movieIdx = gMovies.findIndex(movie => movie.imdb === imdb)
    gMovies.splice(movieIdx, 1)
    return gMovies
}

console.log('sortByName:', sortByName(gMovies));

function sortByName(movies) {
    return movies.sort((movie1, movie2) => {
        if (movie1.name > movie2.name) return 1
        if (movie2.name > movie1.name) return -1
        return 0
    })
}


console.log('sortByRate:', sortByRate(gMovies));

function sortByRate(movies) {
    return movies.sort((movie1, movie2) => movie1.rate - movie2.rate)
}