const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '3mb'}));

app.use('/api', require('./router'));

app.get('/', (req, res) => {
  fs.readFile(__dirname + '/public/client.html', 'utf8', (err, text) => {
    res.send(text);
  });
});

module.exports = app;
