import di from './container';

const path = require('path');
require("babel-core/register");
require("babel-polyfill");
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.post('/news/', function (req, res) {
  const result = di.container
    .getImplementation('newsService', 'server')
    .addNews(req.body);
  res.send(result);
});

app.get('/news/', async function (req, res) {
  const result = await di.container
    .getImplementation('newsService', 'server')
    .getByHashtags(req.query.hashtags);
  res.send(result);
});

app.use('/', express.static(path.join(__dirname, process.env.PUBLIC_DIR)))

app.listen(8080, function () {
    console.log('Hashticle listening on port 8080!')
})
