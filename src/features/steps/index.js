'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server'
const assert = require('chai').assert;

module.exports = function() {

  this.When('I navigate to the index page', function(callback) {
    const App = this.container.get('App');
    this.context.currentPage = ReactDOMServer.renderToString(App);
    callback();
  });

  this.Then('I see the "$text" text on the page', function(text, callback) {
    assert.include(
      this.context.currentPage,
      text,
      `Could not find the text "${text}" on the page (${this.context.currentPage})`
    );
    callback();
  });

};
