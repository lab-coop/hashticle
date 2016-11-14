'use strict';

import React from 'react';

module.exports = function() {
  this.World = World;
};

function World() {
  this.context = {};
  this.container = require('../../client/container');
}

