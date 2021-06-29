/**
* DevExtreme (cjs/core/utils/comparator.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.equals = void 0;

var _dom_adapter = _interopRequireDefault(require("../dom_adapter"));

var _data = require("./data");

var _type = require("./type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasNegation = function hasNegation(oldValue, newValue) {
  return 1 / oldValue === 1 / newValue;
};

var equals = function equals(oldValue, newValue) {
  oldValue = (0, _data.toComparable)(oldValue, true);
  newValue = (0, _data.toComparable)(newValue, true);

  if (oldValue && newValue && (0, _type.isRenderer)(oldValue) && (0, _type.isRenderer)(newValue)) {
    return newValue.is(oldValue);
  }

  var oldValueIsNaN = oldValue !== oldValue;
  var newValueIsNaN = newValue !== newValue;

  if (oldValueIsNaN && newValueIsNaN) {
    return true;
  }

  if (oldValue === 0 && newValue === 0) {
    return hasNegation(oldValue, newValue);
  }

  if (oldValue === null || _typeof(oldValue) !== 'object' || _dom_adapter.default.isElementNode(oldValue)) {
    return oldValue === newValue;
  }

  return false;
};

exports.equals = equals;
