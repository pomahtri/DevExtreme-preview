"use strict";

exports.default = void 0;

var _extend = require("../../core/utils/extend");

var _base = _interopRequireDefault(require("./base"));

var _observer = _interopRequireDefault(require("./observer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventMap = {
  'dxpointerdown': 'mousedown',
  'dxpointermove': 'mousemove',
  'dxpointerup': 'mouseup',
  'dxpointercancel': '',
  'dxpointerover': 'mouseover',
  'dxpointerout': 'mouseout',
  'dxpointerenter': 'mouseenter',
  'dxpointerleave': 'mouseleave'
};

var normalizeMouseEvent = function normalizeMouseEvent(e) {
  e.pointerId = 1;
  return {
    pointers: observer.pointers(),
    pointerId: 1
  };
};

var observer;
var activated = false;

var activateStrategy = function activateStrategy() {
  if (activated) {
    return;
  }

  observer = new _observer.default(eventMap, function () {
    return true;
  });
  activated = true;
};

var MouseStrategy = _base.default.inherit({
  ctor: function ctor() {
    this.callBase.apply(this, arguments);
    activateStrategy();
  },
  _fireEvent: function _fireEvent(args) {
    return this.callBase((0, _extend.extend)(normalizeMouseEvent(args.originalEvent), args));
  }
});

MouseStrategy.map = eventMap;
MouseStrategy.normalize = normalizeMouseEvent;
MouseStrategy.activate = activateStrategy;

MouseStrategy.resetObserver = function () {
  observer.reset();
};

var _default = MouseStrategy;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;