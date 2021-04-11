const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '3mb'}));

app.use('/api', require('./router'));

app.use((error, req, res, next) => {
  if (res.headersSent) {
    next(error);
  } else {
    res.status(400).send({
      status: 400,
      error: {
        code: error.message,
      },
    });
  }
})
// app.get('/', (req, res) => {
//   fs.readFile(__dirname + '/public/client.html', 'utf8', (err, text) => {
//     res.send(text);
//   });
// });

module.exports = app;
