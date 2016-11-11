'use strict';

const di = require('lab-di')();

const root = require('./components/root');
di.registerModule(root, 'root');

module.exports = di;
