'use strict';

import React from 'react';

module.exports = function () {
  class NewsList extends React.Component {
    render() {
      return (
        <div>
          <span>News List</span>
        </div>
      );
    }
  }

  return NewsList;
}
