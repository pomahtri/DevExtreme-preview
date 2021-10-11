/**
* DevExtreme (cjs/renovation/ui/overlays/overlay.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.Overlay = exports.OverlayProps = exports.viewFunction = void 0;

var _inferno = require("inferno");

var _vdom = require("@devextreme/vdom");

var _ui = _interopRequireDefault(require("../../../ui/overlay/ui.overlay"));

var _dom_component_wrapper = require("../common/dom_component_wrapper");

var _base_props = require("../common/base_props");

var _excluded = ["_checkParentVisibility", "accessKey", "activeStateEnabled", "animation", "className", "closeOnOutsideClick", "closeOnTargetScroll", "container", "contentTemplate", "disabled", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "integrationOptions", "maxWidth", "onClick", "onKeyDown", "position", "propagateOutsideClick", "rtlEnabled", "shading", "tabIndex", "templatesRenderAsynchronously", "visible", "width"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var viewFunction = function viewFunction(_ref) {
  var props = _ref.props,
      restAttributes = _ref.restAttributes;
  return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _dom_component_wrapper.DomComponentWrapper, _extends({
    "componentType": _ui.default,
    "componentProps": props
  }, restAttributes)));
};

exports.viewFunction = viewFunction;

var OverlayProps = _extends({}, _base_props.BaseWidgetProps, {
  integrationOptions: {},
  templatesRenderAsynchronously: false,
  shading: true,
  closeOnOutsideClick: false,
  closeOnTargetScroll: false,
  animation: {
    type: "pop",
    duration: 300,
    to: {
      opacity: 0,
      scale: 0.55
    },
    from: {
      opacity: 1,
      scale: 1
    }
  },
  visible: false,
  propagateOutsideClick: true,
  _checkParentVisibility: false,
  rtlEnabled: false,
  contentTemplate: "content",
  maxWidth: null
});

exports.OverlayProps = OverlayProps;

var Overlay = /*#__PURE__*/function (_BaseInfernoComponent) {
  _inheritsLoose(Overlay, _BaseInfernoComponent);

  function Overlay(props) {
    var _this;

    _this = _BaseInfernoComponent.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = Overlay.prototype;

  _proto.render = function render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props),
      restAttributes: this.restAttributes
    });
  };

  _createClass(Overlay, [{
    key: "restAttributes",
    get: function get() {
      var _this$props = this.props,
          _checkParentVisibility = _this$props._checkParentVisibility,
          accessKey = _this$props.accessKey,
          activeStateEnabled = _this$props.activeStateEnabled,
          animation = _this$props.animation,
          className = _this$props.className,
          closeOnOutsideClick = _this$props.closeOnOutsideClick,
          closeOnTargetScroll = _this$props.closeOnTargetScroll,
          container = _this$props.container,
          contentTemplate = _this$props.contentTemplate,
          disabled = _this$props.disabled,
          focusStateEnabled = _this$props.focusStateEnabled,
          height = _this$props.height,
          hint = _this$props.hint,
          hoverStateEnabled = _this$props.hoverStateEnabled,
          integrationOptions = _this$props.integrationOptions,
          maxWidth = _this$props.maxWidth,
          onClick = _this$props.onClick,
          onKeyDown = _this$props.onKeyDown,
          position = _this$props.position,
          propagateOutsideClick = _this$props.propagateOutsideClick,
          rtlEnabled = _this$props.rtlEnabled,
          shading = _this$props.shading,
          tabIndex = _this$props.tabIndex,
          templatesRenderAsynchronously = _this$props.templatesRenderAsynchronously,
          visible = _this$props.visible,
          width = _this$props.width,
          restProps = _objectWithoutProperties(_this$props, _excluded);

      return restProps;
    }
  }]);

  return Overlay;
}(_vdom.BaseInfernoComponent);

exports.Overlay = Overlay;
Overlay.defaultProps = _extends({}, OverlayProps);