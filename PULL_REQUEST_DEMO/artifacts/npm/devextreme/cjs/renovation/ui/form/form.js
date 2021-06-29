/**
* DevExtreme (cjs/renovation/ui/form/form.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.Form = exports.viewFunction = void 0;

var _inferno = require("inferno");

var _vdom = require("@devextreme/vdom");

var _form_props = require("./form_props");

var _combine_classes = require("../../utils/combine_classes");

var _widget = require("../common/widget");

var _layout_manager = require("./layout_manager");

var _scrollable = require("../scroll_view/scrollable");

var _excluded = ["screenByWidth", "scrollingEnabled", "useNativeScrolling"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var viewFunction = function viewFunction(viewModel) {
  var aria = {
    role: "form"
  };
  var cssClasses = (0, _combine_classes.combineClasses)({
    "dx-form": true
  });
  var _viewModel$props = viewModel.props,
      scrollingEnabled = _viewModel$props.scrollingEnabled,
      useNativeScrolling = _viewModel$props.useNativeScrolling,
      restAttributes = viewModel.restAttributes;
  var rootLayoutManager = (0, _inferno.createComponentVNode)(2, _layout_manager.LayoutManager, {
    "screenByWidth": viewModel.props.screenByWidth
  });
  return scrollingEnabled ? (0, _inferno.createComponentVNode)(2, _scrollable.Scrollable, {
    "aria": aria,
    "classes": cssClasses,
    "useNative": !!useNativeScrolling,
    "useSimulatedScrollbar": !useNativeScrolling,
    "useKeyboard": false,
    "direction": "both",
    "bounceEnabled": false,
    children: rootLayoutManager
  }) : (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _widget.Widget, _extends({
    "aria": aria,
    "classes": cssClasses
  }, restAttributes, {
    children: rootLayoutManager
  })));
};

exports.viewFunction = viewFunction;

var Form = /*#__PURE__*/function (_InfernoWrapperCompon) {
  _inheritsLoose(Form, _InfernoWrapperCompon);

  function Form(props) {
    var _this;

    _this = _InfernoWrapperCompon.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = Form.prototype;

  _proto.createEffects = function createEffects() {
    return [(0, _vdom.createReRenderEffect)()];
  };

  _proto.render = function render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props),
      restAttributes: this.restAttributes
    });
  };

  _createClass(Form, [{
    key: "restAttributes",
    get: function get() {
      var _this$props = this.props,
          screenByWidth = _this$props.screenByWidth,
          scrollingEnabled = _this$props.scrollingEnabled,
          useNativeScrolling = _this$props.useNativeScrolling,
          restProps = _objectWithoutProperties(_this$props, _excluded);

      return restProps;
    }
  }]);

  return Form;
}(_vdom.InfernoWrapperComponent);

exports.Form = Form;
Form.defaultProps = _extends({}, _form_props.FormProps);
