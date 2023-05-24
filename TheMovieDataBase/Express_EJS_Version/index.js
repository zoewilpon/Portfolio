require("dotenv").config() // allows us to use .env file where we can store our API key. *KEEP THIS AS CLOSE TO THE TOP AS POSSIBLE*
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
const $fetch = require('node-fetch') // this is how we make API calls
const logger = require('morgan'); 
const {TMDB_API_KEY} = process.env // this is how we access the API key from the .env file

app.use(logger('dev')); // this is how we use the logger middleware


app.set('view engine', 'ejs'); 
app.use(express.static('public')); // this is how we use the public folder to store our css and js files


app.get('/', (req, res) => {
    res.redirect('/home');
});


let baseURL = 'https://api.themoviedb.org/3' // this is the base URL for all of our API calls we leave it outside of the app.get so we can use it in all of our routes
app.get('/home', (req, res) => {
    let route = `movie/now_playing?language=en-US&page=1&api_key=${TMDB_API_KEY}` 
    let endpoint = `${baseURL}/${route}`
    // let endpoint = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=706848739c0b484263042577b1ca3474'
    $fetch(endpoint)
    .then((response) => response.json())
    .then((response) => {
        res.render("home", {data: response.results}); // this is how we pass data to our ejs file. response.results is the array of movies that we get back from the API call (see the json file in the browser to see what the response looks like)
    })
    .catch(err => console.error(err));
    
});

app.get('/getmovies', (req, res) => { // this is the route that we will use to get the movies from the API when the user seaches with the search box in the nav bar 
    let route = `search/movie?api_key=${TMDB_API_KEY}&query=${req.query.movie}&include_adult=false&language=en-US&page=1` //req.query.movie is the movie that the user searched for
    let endpoint = `${baseURL}/${route}`
    $fetch(endpoint)
    .then((response) => response.json())
    .then((response) => {
        if (response.results.length === 0) { // if the user searches for a movie that doesn't exist in the API we will render the error page
            res.render('error')
        } else {
            res.render("home", {data: response.results}); 
        }
    })
    .catch(err => console.error(err));
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});