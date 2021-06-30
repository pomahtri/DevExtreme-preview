/**
* DevExtreme (cjs/localization/parentLocale.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

/* eslint-disable import/no-commonjs */
var PARENT_LOCALE_SEPARATOR = '-';

var _default = function _default(parentLocales, locale) {
  var parentLocale = parentLocales[locale];

  if (parentLocale) {
    return parentLocale !== 'root' && parentLocale;
  }

  return locale.substr(0, locale.lastIndexOf(PARENT_LOCALE_SEPARATOR));
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
