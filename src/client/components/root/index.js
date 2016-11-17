'use strict';

import React from 'react';
import { connect } from 'react-redux'

const Header = require('./header');

function Component(NewsList, NewsActions) {
  class Root extends React.Component {
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(NewsActions.getNews('test'));
    }
    render() {
      return (
        <div>
          <Header name="Hashticle" title={this.props.title} />
          <NewsList news={this.props.news} />
        </div>
      );
    }
  }
  const mapStateToProps = state => {
    return {
      news: state.news
    }
  }
  return connect(mapStateToProps)(Root);
}

Component.deps = ['NewsList', 'NewsActions'];
module.exports = Component;
