/**
* DevExtreme (cjs/core/element.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.getPublicElement = getPublicElement;
exports.setPublicElementWrapper = setPublicElementWrapper;

var strategy = function strategy(element) {
  return element && element.get(0);
};

function getPublicElement(element) {
  return strategy(element);
}

function setPublicElementWrapper(newStrategy) {
  strategy = newStrategy;
}
