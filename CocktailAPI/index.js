const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const $fetch = require('node-fetch');
const { extractIngredients } = require('./helpers.js');

app.set ('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    let endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    $fetch(endpoint)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error('Error retrieving random cocktail');
            }
        })
        .then((data) => {
            // console.log(data.drinks[0].strDrinkThumb);
            const drink = data.drinks[0];
            const { ingredients, measures } = extractIngredients(drink);
            res.render('home', { drink, ingredients, measures});
        })
        .catch((error) => {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});