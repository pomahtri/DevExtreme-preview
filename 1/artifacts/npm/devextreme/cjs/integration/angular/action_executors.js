/**
* DevExtreme (cjs/integration/angular/action_executors.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

var _action = _interopRequireDefault(require("../../core/action"));

var _angular = _interopRequireDefault(require("angular"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-restricted-imports
if (_angular.default) {
  _action.default.registerExecutor({
    'ngExpression': {
      execute: function execute(e) {
        if (typeof e.action === 'string') {
          e.context.$eval(e.action);
        }
      }
    }
  });
}
