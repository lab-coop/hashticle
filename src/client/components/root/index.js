'use strict';

import React from 'react';
const Header = require('./header');

module.exports = function () {
  class Root extends React.Component {
    render() {
      return (
        <div>
          <Header name="Hashticle" title={this.props.title} />
        </div>
      );
    }
  }

  return Root;
}
