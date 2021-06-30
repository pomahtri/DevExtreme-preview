"use strict";

var _knockout = _interopRequireDefault(require("knockout"));

var _icon = require("../../core/utils/icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-restricted-imports
if (_knockout.default) {
  _knockout.default.bindingHandlers.dxControlsDescendantBindings = {
    init: function init(_, valueAccessor) {
      return {
        controlsDescendantBindings: _knockout.default.unwrap(valueAccessor())
      };
    }
  };
  _knockout.default.bindingHandlers.dxIcon = {
    init: function init(element, valueAccessor) {
      var options = _knockout.default.utils.unwrapObservable(valueAccessor()) || {};
      var iconElement = (0, _icon.getImageContainer)(options);

      _knockout.default.virtualElements.emptyNode(element);

      if (iconElement) {
        _knockout.default.virtualElements.prepend(element, iconElement.get(0));
      }
    },
    update: function update(element, valueAccessor) {
      var options = _knockout.default.utils.unwrapObservable(valueAccessor()) || {};
      var iconElement = (0, _icon.getImageContainer)(options);

      _knockout.default.virtualElements.emptyNode(element);

      if (iconElement) {
        _knockout.default.virtualElements.prepend(element, iconElement.get(0));
      }
    }
  };
  _knockout.default.virtualElements.allowedBindings.dxIcon = true;
}