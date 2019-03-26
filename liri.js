//*****Variables******
require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2]
var value = process.argv[3]

//*****Functions******
function concert() {
    var apiCall = 'https://rest.bandsintown.com/artists/' + value + '/events?app_id=codingbootcamp'
    var apiValue
    var venue
    var location
    var eventDate
    //Spotify API call based off value
    console.log('Venue is ' + venue)
    console.log('Venue location is' + location)
    console.log('Date of the event is ' + moment(eventDate, "MM/DD/YYYY"))
    
}

function spotify() {
    var apiCall
    var apiResponse
    var artist
    var songName
    var prevLink
    var album
    //how to handle no response value from spotify?

    if (value) {
        //values are set to spotify api call values
    } else {
        artist = 'Ace of Base'
        songName = 'The Sign'
        prevLink //put link here
        album //put album here
    }

    console.log('Artist is ' + artist)
    console.log('Song name is ' + songName)
    console.log('Preview link - ' + prevLink)
    console.log ('Albume is ' + album)
}

function movie() {
    var apiCall
    var apiResponse

    //movie values
    var title
    var year
    var imdbRat
    var rtRat
    var prodCountry
    var language
    var plot
    var actors

    if (value) {
        //set values to API call values
    } else {
        title = 'Mr. Nobody'
        //set rest of the values here
    }

    console.log('Title is ' + title)
    console.log('Year the movie came out is ' + year)
    console.log('IMDB Rating is ' + imdbRat + '. Rotten tomatoes rating is ' + rtRat + '.')
    console.log('Country of production is ' + prodCountry)
    console.log('The language of the movie is ' + language)
    console.log('Plot summary: ' + plot)
    console.log('Actors in the movie are ' + actors)
}

function doWhat() {
    
/*
Uses the text in random.txt to make a call
should take in a function call (spotify/movie/concerts)
    and a value
*/
}


//*****Body of the code*****/
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
