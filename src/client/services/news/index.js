'use strict';


function NewsService (container) {
  const implementation = container.config.get('newsService') || 'external';
  return container.getImplementation('newsService', implementation);
}

NewsService.type = 'factory';
module.exports = NewsService;
