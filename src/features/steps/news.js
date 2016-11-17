'use strict';

const expect = require('chai').expect;

module.exports = function () {

  this.Given('the news site is provide these news', function (newsList, callback) {
    const newsService = this.container.get('newsService');
    newsList.hashes().forEach(newsService.addNews);
    callback();
  });

  this.Then('I see the "$count" news on the page', function (count, callback) {
    const currentPage = this.context.currentPage;
    this.tools.waitForElement(currentPage, '.news', function(elements) {
      expect(elements.length).to.eql(parseInt(count));
      callback();
    });
  });

}
