require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const $fetch = require('node-fetch');
app.set('view engine', 'ejs');
app.use(express.static('public'));
const { valueConvertor } = require('./helpers.js')
apiKEY = process.env.API_KEY;

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('home');
});


let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${apiKEY}`);

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

app.get('/searchresults', (req, res) => {
$fetch(`https://api.yelp.com/v3/businesses/search?location=${req.query.location}&limit=10`, requestOptions)
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