/**
* DevExtreme (renovation/ui/resizable/handle.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.defaultOptions = defaultOptions;
exports.ResizableHandle = exports.ResizableHandleProps = exports.viewFunction = void 0;

var _inferno = require("inferno");

var _vdom = require("@devextreme/vdom");

var _drag = require("../../../events/drag");

var _index = require("../../../events/utils/index");

var _events_engine = _interopRequireDefault(require("../../../events/core/events_engine"));

var _utils = require("../../../core/options/utils");

var _excluded = ["direction", "disabled", "onResize", "onResizeEnd", "onResizeStart"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var namespace = "dxResizable";
var dragStartEvent = (0, _index.addNamespace)(_drag.start, namespace);
var dragEvent = (0, _index.addNamespace)(_drag.move, namespace);
var dragEndEvent = (0, _index.addNamespace)(_drag.end, namespace);

var viewFunction = function viewFunction(viewModel) {
  var mainRef = viewModel.mainRef,
      props = viewModel.props;
  var direction = props.direction;
  return (0, _inferno.createVNode)(1, "div", "dx-resizable-handle dx-resizable-handle-".concat(direction), null, 1, null, null, mainRef);
};

exports.viewFunction = viewFunction;
var ResizableHandleProps = {
  direction: "top",
  disabled: false
};
exports.ResizableHandleProps = ResizableHandleProps;

var ResizableHandle = /*#__PURE__*/function (_InfernoComponent) {
  _inheritsLoose(ResizableHandle, _InfernoComponent);

  function ResizableHandle(props) {
    var _this;

    _this = _InfernoComponent.call(this, props) || this;
    _this.state = {};
    _this.mainRef = (0, _inferno.createRef)();
    _this.dragEventsEffect = _this.dragEventsEffect.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ResizableHandle.prototype;

  _proto.createEffects = function createEffects() {
    return [new _vdom.InfernoEffect(this.dragEventsEffect, [this.props.disabled, this.props.onResize, this.props.onResizeEnd, this.props.onResizeStart])];
  };

  _proto.updateEffects = function updateEffects() {
    var _this$_effects$;

    (_this$_effects$ = this._effects[0]) === null || _this$_effects$ === void 0 ? void 0 : _this$_effects$.update([this.props.disabled, this.props.onResize, this.props.onResizeEnd, this.props.onResizeStart]);
  };

  _proto.dragEventsEffect = function dragEventsEffect() {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        onResize = _this$props.onResize,
        onResizeEnd = _this$props.onResizeEnd,
        onResizeStart = _this$props.onResizeStart;

    if (!disabled) {
      var handleEl = this.mainRef.current;
      var opts = {
        direction: "both",
        immediate: true
      };

      _events_engine.default.on(handleEl, _defineProperty({}, dragStartEvent, function (event) {
        var _eventsEngine$on;

        _events_engine.default.on(handleEl, (_eventsEngine$on = {}, _defineProperty(_eventsEngine$on, dragEvent, onResize), _defineProperty(_eventsEngine$on, dragEndEvent, onResizeEnd), _eventsEngine$on), opts);

        onResizeStart === null || onResizeStart === void 0 ? void 0 : onResizeStart(event);
      }), opts);

      return function () {
        return _events_engine.default.off(handleEl, undefined, undefined);
      };
    }

    return undefined;
  };

  _proto.render = function render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props),
      mainRef: this.mainRef,
      restAttributes: this.restAttributes
    });
  };

  _createClass(ResizableHandle, [{
    key: "restAttributes",
    get: function get() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          disabled = _this$props2.disabled,
          onResize = _this$props2.onResize,
          onResizeEnd = _this$props2.onResizeEnd,
          onResizeStart = _this$props2.onResizeStart,
          restProps = _objectWithoutProperties(_this$props2, _excluded);

      return restProps;
    }
  }]);

  return ResizableHandle;
}(_vdom.InfernoComponent);

exports.ResizableHandle = ResizableHandle;

function __createDefaultProps() {
  return _extends({}, ResizableHandleProps, (0, _utils.convertRulesToOptions)([]));
}

ResizableHandle.defaultProps = __createDefaultProps();
var __defaultOptionRules = [];

function defaultOptions(rule) {
  __defaultOptionRules.push(rule);

  ResizableHandle.defaultProps = _extends({}, __createDefaultProps(), (0, _utils.convertRulesToOptions)(__defaultOptionRules));
}
