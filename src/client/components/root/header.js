'use strict';

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

module.exports = Header;

