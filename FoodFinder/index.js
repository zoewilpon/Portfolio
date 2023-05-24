// require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// const {YELP_API_KEY} = process.env
// const yelp = require('yelp-fusion');
// const client = yelp.client('JtVQjWFMYJ06lBowSBpNDVzHuqS6qIuH0NN4GGS0sXPHxFmifLnNY14UVCZdCPDHjEaJzzkPlcpr8LYTg4SJMJZFnHkOMt5AjfM3jAroLGiLB6NnjFDZ8XHaryVsZHYx');
// const client = yelp.client(YELP_API_KEY);
const $fetch = require('node-fetch');
app.set('view engine', 'ejs');
app.use(express.static('public'));
const { valueConvertor } = require('./helpers.js')

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('home');
});


// app.get('/searchresults', (req, res, next) => {
//     client.search({
//         location: `${req.query.location}`,
//     }).then(response => {
//         console.log(response.jsonBody.businesses);
//         searchResults = response.jsonBody.businesses.id;
//         next();
//         // res.render('searchresults', { data: response.jsonBody.businesses });
//     }).catch(e => {
//         console.log(e);
//     });
//     ;
// });

// app.get('/searchresults', (req, res, next) => {
//     // let route = `search?location=${req.query.location}&sort_by=best_match&limit=10`
//     // let endpoint = `${baseURL}/${route}`
//     // $fetch(endpoint)
//     // .then((response) => response.json())
//     // .then((response) => {
//     //     console.log(response.businesses);
//     //     res.render("searchresults", {data: response.businesses}); 
//     // })
//     // .catch(err => console.error(err));


//     // client.reviews(`${req.query.location}`)
//     // .then(response => {
//     //     console.log(response.jsonBody.reviews);
//     //     res.render('searchresults', { data: response.jsonBody.reviews });
//     // }).catch(e => {
//     //     console.log(e);
//     // })
// });

let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer JtVQjWFMYJ06lBowSBpNDVzHuqS6qIuH0NN4GGS0sXPHxFmifLnNY14UVCZdCPDHjEaJzzkPlcpr8LYTg4SJMJZFnHkOMt5AjfM3jAroLGiLB6NnjFDZ8XHaryVsZHYx");

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

app.get('/searchresults', (req, res) => {
fetch(`https://api.yelp.com/v3/businesses/search?location=${req.query.location}&limit=10`, requestOptions)
    .then(response => {
            if (response.ok){
                return response.json();
            } else {
                throw Error('Request Failed')
            }
    })
    .then(result => {
        // console.log(result.businesses);
        let convertedRatings = result.businesses.map(business => valueConvertor(business.rating));
        res.render('searchresults', { data: result.businesses, valueConvertor: convertedRatings });
    })
    .catch(error => console.log('error', error));
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});