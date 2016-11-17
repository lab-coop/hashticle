'use strict';

function waitForElement(element, selector, callback, timeout) {
  timeout = timeout || 100;
  const interval = 10;
  const timer = setInterval(function() {
    const foundElements = element.find(selector);
    if (foundElements.length) {
      callback(foundElements);
    }
    timeout = timeout - interval;
    if (timeout <= 0){
      clearInterval(timer);
    }
  }, interval);
}

module.exports = Object.freeze({
  waitForElement
});
