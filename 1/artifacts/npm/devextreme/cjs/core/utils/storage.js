/**
* DevExtreme (cjs/core/utils/storage.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.sessionStorage = void 0;

var _window = require("../../core/utils/window");

var window = (0, _window.getWindow)();

var getSessionStorage = function getSessionStorage() {
  var sessionStorage;

  try {
    sessionStorage = window.sessionStorage;
  } catch (e) {}

  return sessionStorage;
};

exports.sessionStorage = getSessionStorage;
