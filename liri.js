//*****Variables******
require("dotenv").config();
const axios = require("axios")
const moment = require('moment')
var fs = require("fs");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id:keys.spotify.id,
    secret:keys.spotify.secret
});

var command = process.argv[2]
var value = (process.argv).slice(3)
value.toString(' ')

//*****Functions******
function concert() {
    var apiCall = 'https://rest.bandsintown.com/artists/' + value + '/events?app_id=codingbootcamp'
    var venue
    var location
    var eventDate
    const getConcert = async () => {
        try {
            return await axios.get(apiCall)
        } catch (error) {
            console.error(error)
        }
    }

    const getInfo = async () => {
        const val = await getConcert()
        venue = val.data[0].venue.name
        location = val.data[0].venue.city
        eventDate = val.data[0].datetime
        console.log('Venue is ' + venue)
        console.log('Venue location is ' + location)
        eventDate= moment(eventDate).format('MM/DD/YYYY')
        console.log('Date of the event is ' + eventDate)
    }

    getInfo()
}

function spotifyThis() {
    var songName = "The Sign"
    var artist = "Ace of Base"
    var prevLink = 'https://p.scdn.co/mp3-preview/af237206f611b722f48620ece049aff3b8650e77?cid=72b39f5b0c8f4c9194f61079063a7b27'
    var album = "Happy Nation"
    if (value) {
    spotify
        .search({ type: 'track', query: value })
        .then(function(response) {
            var song = response.tracks.items[0]
            var artistList = song.artists
            songName = song.name
            artist = []
            artistList.forEach(function(objs){
                artist.push(objs.name)
            })
            prevLink = song.preview_url
            album = song.album.name

            console.log('Artist is ' + artist)
            console.log('Song name is ' + songName)
            console.log('Preview link - ' + prevLink)
            console.log ('Album is ' + album)
        })
        .catch(function(err) {
            console.log(err);
        });
    } else {
        console.log('Artist is ' + artist)
        console.log('Song name is ' + songName)
        console.log('Preview link - ' + prevLink)
        console.log ('Album is ' + album)
    }
}

function movie() {
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
        value = value.replace(' ', '+')
        var queryUrl = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy"
        axios.get(queryUrl).then(
            function(response) {
                var movie = response.data
                var ratings = movie.Ratings
                title = movie.Title
                year = movie.Year
                imdbRat = movie.imdbRating
                rtRat = Object.values(ratings[1])[1]
                prodCountry = movie.Country
                language = movie.Language
                plot = movie.Plot
                actors = movie.Actors
                console.log('Title is ' + title)
                console.log('Year the movie came out is ' + year)
                console.log('IMDB Rating is ' + imdbRat + '. Rotten tomatoes rating is ' + rtRat + '.')
                console.log('Country of production is ' + prodCountry)
                console.log('The language of the movie is ' + language)
                console.log('Plot summary: ' + plot)
                console.log('Actors in the movie are ' + actors)
            }
        );
    } else {
        axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy").then(
            function(response) {
                var movie = response.data
                var ratings = movie.Ratings
                title = movie.Title
                year = movie.Year
                imdbRat = movie.imdbRating
                rtRat = Object.values(ratings[1])[1]
                prodCountry = movie.Country
                language = movie.Language
                plot = movie.Plot
                actors = movie.Actors
                console.log('Title is ' + title)
                console.log('Year the movie came out is ' + year)
                console.log('IMDB Rating is ' + imdbRat + '. Rotten tomatoes rating is ' + rtRat + '.')
                console.log('Country of production is ' + prodCountry)
                console.log('The language of the movie is ' + language)
                console.log('Plot summary: ' + plot)
                console.log('Actors in the movie are ' + actors)
            }
          );
    }

    
}

function doWhat() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        var dataArr = data.split(",");
        value = dataArr[1]
        if (dataArr[0] ==='concert-this') {
            concert()
        } else if (dataArr[0]==='spotify-this-song') {
            spotifyThis()
        } else if (dataArr[0] === 'movie-this') {
            movie()
        }
    });
}


//*****Body of the code*****/
if (command ==='concert-this') {
    concert()
} else if (command==='spotify-this-song') {
    spotifyThis()
} else if (command === 'movie-this') {
    movie()
} else if (command === 'do-what-it-says') {
    doWhat()
} else {
    console.log('please enter a valid input')
}
