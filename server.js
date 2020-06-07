const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes', (req, res) => {
  res.send({quotes});
});

app.listen(PORT, () => console.log('Example app listening at http://localhost:'+PORT))
