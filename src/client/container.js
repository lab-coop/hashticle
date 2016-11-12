'use strict';

const di = require('lab-di')();

const root = require('./components/root');
const newsList = require('./components/news-list');

di.registerModule(root, 'root');
di.registerModule(newsList, 'NewsList');

module.exports = di;
