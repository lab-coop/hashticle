'use strict';

const request = require('request');
const _ = require('lodash');

const moment = require('moment');

module.exports = function () {

  function getByHashtags(hashtags) {
    return new Promise(function (resolve, reject) {
      const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      const qs = {'api-key': '90c64a4273d04b5799111f7a7e227e2c', q:hashtags};
      const headers = {
        'Origin': '',
        'Referer': ''
      }
      request({url, qs, headers}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          const result = JSON.parse(body).response;
          resolve(result.docs.map(doc => {
            let image = _.find(doc.multimedia, {subtype: 'xlarge'});
            if (image) {
              image = 'http://www.nytimes.com/'+_.get(image, 'url', '');
            } else {
              image = null;
            }
            return {
              title: doc.headline.main,
              content: doc.lead_paragraph,
              id:doc._id,
              image,
              web_url: doc.web_url,
              date: moment(doc.pub_date)

            }
          }));
        } else {
          reject(`Unable to receive the news. ${body}`);
        }
      });
    });
  }

  return Object.freeze({
    addNews: () => {},
    getByHashtags
  })
}
