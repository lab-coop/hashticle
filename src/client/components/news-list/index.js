'use strict';

import React from 'react';

module.exports = function () {
  class NewsList extends React.Component {
    render() {
      return (
        <div>
          <div>
          {this.props.news.items.map(function(item) {
            return <div className="news" key={item.id}>{item.title}</div>;
          })}
          </div>
        </div>
      );
    }
  }

  return NewsList;
}
