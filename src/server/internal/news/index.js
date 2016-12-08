'use strict';

function NewsServivce (newsProvider) {
  function addNews (newsItem) {
    return newsProvider.addNews(newsItem);
  }

  function getByHashtags(hashtags) {
    return newsProvider.getByHashtags(hashtags);
  }

  return Object.freeze({
    addNews,
    getByHashtags
  })
}

NewsServivce.service = 'newsService';
NewsServivce.implementation = 'server';
NewsServivce.deps = ['newsProvider'];
module.exports = NewsServivce;
