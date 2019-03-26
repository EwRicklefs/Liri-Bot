//*****Variables******
require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2]
var value = process.argv[3]

//*****Functions******
function concert() {
    //Spotify API call based off value
    //console log 
/*      name of venue
        venue location
        date of event (mm/dd/yyyy, use moment)
*/
}

function spotify() {
    //spotify API call based off value
    //console log
/*
        artist(s)
        song name
        preview link from spotify
        album
*/
//with no song default to 'the sign' by ace of bass
}

function movie() {
    //OMDB call based off value (axios package)
/*
log..  * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
*/

//with no value default to "mr. nobody"
}

function doWhat() {
/*
Uses the text in random.txt to make a call
should take in a function call (spotify/movie/concerts)
    and a value
*/
}


//executes proper function based off user input
if (command ==='concert-this') {
    concert()

 
} else if (command==='spotify-this-song') {
    spotify()
} else if (command === 'movie-this') {
    movie()
} else if (command === 'do-what-it-says') {
    doWhat()
} else {
    console.log('please enter a valid input')
}