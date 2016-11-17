'use strict';

module.exports = function () {
  let id = 0;
  const newsList = [];
  function addNews (newsItem) {
    id++;
    newsList.push({...newsItem, id});
  }

  function getByHashtags() {
    return Promise.resolve(newsList);
  }

  return Object.freeze({
    addNews,
    getByHashtags
  })
}
