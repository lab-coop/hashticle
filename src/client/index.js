import React from 'react';
import ReactDOM from 'react-dom';

require('./scss/main.scss');

const container = require('./container');
const root = container.get('root');

ReactDOM.render(React.createElement(root), document.getElementById('app'));
