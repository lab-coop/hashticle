'use strict';


function NewsService (container) {
  const implementation = container.config.get('newsService');
  return container.getImplementation('newsService', implementation);
}

NewsService.type = 'factory';
module.exports = NewsService;
