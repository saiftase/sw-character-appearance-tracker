const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
var request = Promise.promisifyAll(require( "request"), { multiArgs: true });

const app = express();
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const charactersJSON = require('./resources/characters');

app.get('/characters', (req, res) => {
    res.status(200).json(charactersJSON);
});

app.get('/:character/films', (req, res) => {
    // Find character entry in characters.json
    const matchingCharacters = charactersJSON.characters.filter(character => {
        return character.name.toLowerCase() === req.params.character.toLowerCase();
    });

    if(matchingCharacters.length === 1){
        const character = matchingCharacters[0];
        request(character.url, function (error, response, body) {
            if (error) {
                res.status(500).send("Sorry, an error occurred.")
            }

            let filmURLs = JSON.parse(body).films;

            if(!filmURLs){
                res.status(500).send("Sorry, an error occurred.")
            }

            Promise.map(filmURLs, filmURL => {
                // Bluebird / Request boilerplate code
                return request.getAsync(filmURL).spread(function(response,body) {
                    return [JSON.parse(body)];
                });
            }).then(results => {

                results = results.map(result => {
                    result = result[0];
                    const releaseDate = new Date(result['release_date'] + 'EST');
                    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }

                    const filmSimple = {
                        title: result['title'],
                        releaseDate: releaseDate.toLocaleString("en-US", dateOptions)
                    }

                    return filmSimple;
                });

                res.send({
                 character: character.name,
                 movies: results
                });

            });

        })
    }else {
        res.status(400).send("Character not found.")
    }
});

app.listen(3001);