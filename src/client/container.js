'use strict';

const di = require('lab-di')();
const config = require('lab-config');
const configMemory = require('lab-config/implementations/memory');

const app = require('./app');
const store = require('./store');

import login from './components/login';
import loginPage from './layouts/login';
import loginController from './controllers/login';

const root = require('./components/root');
const newsList = require('./components/news-list');

const news = require('./services/news');
const newsMemory = require('./services/news/implementations/memory');
const newsExternal = require('./services/news/implementations/external');

import auth from './services/auth';
import authMemory from './services/auth/implementations/memory';
import authExternal from './services/auth/implementations/external';

const newsActions = require('./actions/news');

di.registerModule(config, 'config');
di.registerModule(configMemory, 'lab-config-memory');
di.registerModule(app, 'App');
di.registerModule(store, 'Store');
di.registerModule(root, 'Root');
di.registerModule(login, 'Login');
di.registerModule(loginPage, 'LoginPage');
di.registerModule(loginController, 'LoginController');
di.registerModule(newsList, 'NewsList');
di.registerModule(news, 'newsService');
di.registerModule(newsMemory, 'newsService-memory');
di.registerModule(newsExternal, 'newsService-external');
di.registerModule(auth, 'authService');
di.registerModule(authMemory, 'authService-memory');
di.registerModule(authExternal, 'authService-external');
di.registerModule(newsActions, 'NewsActions');

module.exports = di;
