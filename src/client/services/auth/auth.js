export default Object.freeze({
  executeStateChange: (callback, data) => {
    if (callback) {
      callback(data);
    }
    return false;
  }
});

