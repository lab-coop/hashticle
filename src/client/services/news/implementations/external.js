'use strict';

const request = require('superagent');
const moment = require('moment');

module.exports = function () {
  function getByHashtags(hashtags) {
    return new Promise(function (resolve, reject) {
      request
        .get('/news')
        .query({ hashtags })
        .end(function(error, res){
          if (!error) {
            const news = JSON.parse(res.text)
              .map((item) => ({
                ...item,
                date: moment(item.date)
            }));
            resolve(news);
          } else {
            reject(`Unable to receive the news. ${error}`);
          }

        });
    });
  }

  return Object.freeze({
    addNews: () => {},
    getByHashtags
  })
}
