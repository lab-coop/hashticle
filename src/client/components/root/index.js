'use strict';

import React from 'react';
const Header = require('./header');

function Component(NewsList) {
  class Root extends React.Component {
    render() {
      return (
        <div>
          <Header name="Hashticle" title={this.props.title} />
          <NewsList />
        </div>
      );
    }
  }

  return Root;
}

Component.deps = ['NewsList'];
module.exports = Component;
