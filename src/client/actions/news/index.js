function NewsActions(NewsService) {

  const REQUEST_NEWS = 'REQUEST_NEWS';
  const RECEIVE_NEWS = 'RECEIVE_NEWS';

  const requestNews = (hashtags) => ({
    type: REQUEST_NEWS,
    hashtags
  });

  const receiveNews = (hashtags, news) => ({
    type: RECEIVE_NEWS,
    hashtags,
    news
  });

  const fetchNews = hashtags => dispatch => {
    return NewsService.getByHashtags(hashtags)
      .then(news => dispatch(receiveNews(hashtags, news)))
      .catch(error => console.log(error));
  }

  const getNews = hashtags => dispatch => {
    dispatch(requestNews(hashtags));
    dispatch(fetchNews(hashtags));
  }

  return Object.freeze({
    RECEIVE_NEWS,
    REQUEST_NEWS,
    getNews
  });

}

NewsActions.deps = ['newsService'];
module.exports = NewsActions;
