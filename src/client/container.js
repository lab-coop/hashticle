'use strict';

const di = require('lab-di')();
const config = require('lab-config');

const app = require('./app');
const store = require('./store');

const root = require('./components/root');
const newsList = require('./components/news-list');

const news = require('./services/news');

const newsActions = require('./actions/news');

di.registerModule(config, 'config');
di.registerModule(app, 'App');
di.registerModule(store, 'Store');
di.registerModule(root, 'Root');
di.registerModule(newsList, 'NewsList');
di.registerModule(news, 'newsService');
di.registerModule(newsActions, 'NewsActions');

module.exports = di;
