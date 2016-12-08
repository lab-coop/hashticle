'use strict';

function NewsProvider (container) {
  const implementation = container.config.get('newsProvider') || 'external';
  return container.getImplementation('newsProvider', implementation);
}

NewsProvider.type = 'factory';
module.exports = NewsProvider;
