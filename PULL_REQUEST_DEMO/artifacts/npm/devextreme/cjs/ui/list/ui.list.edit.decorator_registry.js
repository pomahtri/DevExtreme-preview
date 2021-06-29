/**
* DevExtreme (cjs/ui/list/ui.list.edit.decorator_registry.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.register = register;
exports.registry = void 0;

var _extend = require("../../core/utils/extend");

var registry = {};
exports.registry = registry;

function register(option, type, decoratorClass) {
  var decoratorsRegistry = registry;
  var decoratorConfig = {};
  decoratorConfig[option] = decoratorsRegistry[option] ? decoratorsRegistry[option] : {};
  decoratorConfig[option][type] = decoratorClass;
  (0, _extend.extend)(decoratorsRegistry, decoratorConfig);
}
