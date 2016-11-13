'use strict';

import React from 'react';

function App(Root) {
  return (
    <Root title="Read news by tags" />
  )
}

App.deps = ['Root'];
module.exports = App;
