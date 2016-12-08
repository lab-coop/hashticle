import register from 'ignore-styles'
register(['.scss'])
require("babel-polyfill")
const tools = require('./tools');

module.exports = function() {
  this.World = World;
};

function World() {
  this.context = {};
  this.tools = tools;
  this.container = require('../../client/container');
  this.server = require('../../server/container');
  setupConfig(this.container.get('config'));
}

function setupConfig(config) {
  config.update('newsService','memory');
  config.update('authService','memory');
}
