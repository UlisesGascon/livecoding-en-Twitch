const got = require('got');
const {ombdToken} = require("../config")


function generateMovieDetails (title) {
    const url = `http://www.omdbapi.com/?t=${title}&apikey=${ombdToken}`
    return got(url).then(response => JSON.parse(response.body))
}

module.exports = {generateMovieDetails}