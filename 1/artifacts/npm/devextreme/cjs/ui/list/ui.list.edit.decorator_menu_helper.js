/**
* DevExtreme (cjs/ui/list/ui.list.edit.decorator_menu_helper.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;
var EditDecoratorMenuHelperMixin = {
  _menuEnabled: function _menuEnabled() {
    return !!this._menuItems().length;
  },
  _menuItems: function _menuItems() {
    return this._list.option('menuItems');
  },
  _deleteEnabled: function _deleteEnabled() {
    return this._list.option('allowItemDeleting');
  },
  _fireMenuAction: function _fireMenuAction($itemElement, action) {
    this._list._itemEventHandlerByHandler($itemElement, action, {}, {
      excludeValidators: ['disabled', 'readOnly']
    });
  }
};
var _default = EditDecoratorMenuHelperMixin;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
