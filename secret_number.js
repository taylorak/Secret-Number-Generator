'use strict';
module.exports = function() {
  var _secretNum = Math.ceil(Math.random() * 1000000);
  return function() { return _secretNum; }
};