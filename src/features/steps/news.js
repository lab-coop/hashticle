'use strict';

const expect = require('chai').expect;

module.exports = function () {

  this.Given('the news site is provide these news', function (newsList, callback) {
    const newsService = this.container.get('newsService');
    newsList.hashes().forEach(newsService.addNews);
    callback();
  });

  this.Then('I see the "$count" news on the page', function (count, callback) {
    const container = this.container;
    const currentPage = this.context.currentPage;
    const store = this.context.store;
    const unsubscribe = store.subscribe(checkNews);

    function checkNews() {
      if (store.getState().news.state === container.get('NewsActions').RECEIVE_NEWS) {
        expect(currentPage.find('.news').length).to.eql(parseInt(count));
        unsubscribe();
        callback();
      }
    }
  });

}
