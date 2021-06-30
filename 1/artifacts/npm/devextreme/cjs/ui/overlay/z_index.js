/**
* DevExtreme (cjs/ui/overlay/z_index.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.clearStack = exports.remove = exports.create = exports.base = void 0;

var _common = require("../../core/utils/common");

var baseZIndex = 1500;
var zIndexStack = [];

var base = function base(ZIndex) {
  baseZIndex = (0, _common.ensureDefined)(ZIndex, baseZIndex);
  return baseZIndex;
};

exports.base = base;

var create = function create() {
  var baseIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : baseZIndex;
  var length = zIndexStack.length;
  var index = (length ? zIndexStack[length - 1] : baseIndex) + 1;
  zIndexStack.push(index);
  return index;
};

exports.create = create;

var remove = function remove(zIndex) {
  var position = zIndexStack.indexOf(zIndex);

  if (position >= 0) {
    zIndexStack.splice(position, 1);
  }
};

exports.remove = remove;

var clearStack = function clearStack() {
  zIndexStack = [];
};

exports.clearStack = clearStack;
