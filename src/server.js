var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/characters', (req, res) => {
    res.status(200).sendFile('./resources/characters.json', { root: __dirname });
});

app.listen(3001);