'use strict';

import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container light-text mdl-layout mdl-js-layout">
        <h1>{this.props.name}</h1>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

module.exports = Header;

