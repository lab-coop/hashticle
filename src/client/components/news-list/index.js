'use strict';

import React from 'react';
import './news.scss';

module.exports = function () {
  class NewsList extends React.Component {
    render() {
      return (
        <div>
          <div>
            {this.props.news.items.map(function(item) {
              return (
                <div className="news" key={item.id}>
                  <div className="mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                      <h2 className="mdl-card__title-text">{item.title}</h2>
                    </div>
                    <div className="news-media-box">
                      <img className="news-media" src={item.image} width="600" height="300" alt="" />
                    </div>
                    <div className="mdl-card__supporting-text">
                      <h3 className="mdl-typography--headline">{item.date.format('YYYY-MM-DD HH:mm:ss')}</h3>
                      {item.content}
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                      <a href={item.web_url} target="_blank" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Read More
                    </a>
                    </div>
                    <div className="mdl-card__menu">
                      <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons">share</i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }

  return NewsList;
}
