import React from 'react';
import ReactDOM from 'react-dom';

require('./scss/main.scss');

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Hashticle</h1>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));
