'use strict';

import React from 'react';

module.exports = function () {
  class Root extends React.Component {
    render() {
      return (
        <div>
          <h1>Hashticle</h1>
        </div>
      );
    }
  }

  return Root;
}
