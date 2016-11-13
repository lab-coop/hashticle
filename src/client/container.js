'use strict';

const di = require('lab-di')();

const app = require('./app');

const root = require('./components/root');
const newsList = require('./components/news-list');

di.registerModule(app, 'App');
di.registerModule(root, 'Root');
di.registerModule(newsList, 'NewsList');

module.exports = di;
