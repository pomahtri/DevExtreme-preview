/**
* DevExtreme (cjs/ui/scheduler/publisher_mixin.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;
var publisherMixin = {
  notifyObserver: function notifyObserver(subject, args) {
    var observer = this.option('observer');

    if (observer) {
      observer.fire(subject, args);
    }
  },
  invoke: function invoke() {
    var observer = this.option('observer');

    if (observer) {
      return observer.fire.apply(observer, arguments);
    }
  }
};
var _default = publisherMixin;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;