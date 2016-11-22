'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server'
const assert = require('chai').assert;
import { mount } from 'enzyme';

module.exports = function() {

  this.When('I navigate to the index page', function(callback) {
    const App = this.container.get('App');
    this.context.currentPage = mount(App);
    this.context.store = this.context.currentPage.node.store;
    callback();
  });

  this.Then('I see the "$text" text on the page', function(text, callback) {
    const strings = this.context.currentPage.text();
    assert.include(
      strings,
      text,
      `Could not find the text "${text}" on the page (${this.context.currentPage})`
    );
    callback();
  });

};
