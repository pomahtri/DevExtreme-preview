/**
* DevExtreme (esm/renovation/ui/button.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["accessKey", "activeStateEnabled", "children", "className", "disabled", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "icon", "iconPosition", "onClick", "onKeyDown", "onSubmit", "pressed", "rtlEnabled", "stylingMode", "tabIndex", "template", "templateData", "text", "type", "useInkRipple", "useSubmitBehavior", "validationGroup", "visible", "width"];
import { createVNode, createComponentVNode, normalizeProps } from "inferno";
import { InfernoEffect, InfernoWrapperComponent } from "@devextreme/vdom";
import { createDefaultOptionRules, convertRulesToOptions } from "../../core/options/utils";
import devices from "../../core/devices";
import { isMaterial, current } from "../../ui/themes";
import { click } from "../../events/short";
import { combineClasses } from "../utils/combine_classes";
import { getImageSourceType } from "../../core/utils/icon";
import { Icon } from "./common/icon";
import { InkRipple } from "./common/ink_ripple";
import { Widget } from "./common/widget";
import { BaseWidgetProps } from "./common/base_props";
var stylingModes = ["outlined", "text", "contained"];

var getCssClasses = model => {
  var {
    icon,
    iconPosition,
    stylingMode,
    text,
    type
  } = model;
  var isValidStylingMode = stylingMode && stylingModes.includes(stylingMode);
  var classesMap = {
    "dx-button": true,
    ["dx-button-mode-".concat(isValidStylingMode ? stylingMode : "contained")]: true,
    ["dx-button-".concat(type !== null && type !== void 0 ? type : "normal")]: true,
    "dx-button-has-text": !!text,
    "dx-button-has-icon": !!icon,
    "dx-button-icon-right": iconPosition !== "left"
  };
  return combineClasses(classesMap);
};

export var viewFunction = viewModel => {
  var {
    children,
    icon,
    iconPosition,
    template: ButtonTemplate,
    templateData,
    text
  } = viewModel.props;
  var renderText = !viewModel.props.template && !children && text !== "";
  var isIconLeft = iconPosition === "left";
  var iconComponent = !viewModel.props.template && !children && viewModel.iconSource && createComponentVNode(2, Icon, {
    "source": viewModel.iconSource,
    "position": iconPosition
  });
  return normalizeProps(createComponentVNode(2, Widget, _extends({
    "accessKey": viewModel.props.accessKey,
    "activeStateEnabled": viewModel.props.activeStateEnabled,
    "aria": viewModel.aria,
    "className": viewModel.props.className,
    "classes": viewModel.cssClasses,
    "disabled": viewModel.props.disabled,
    "focusStateEnabled": viewModel.props.focusStateEnabled,
    "height": viewModel.props.height,
    "hint": viewModel.props.hint,
    "hoverStateEnabled": viewModel.props.hoverStateEnabled,
    "onActive": viewModel.onActive,
    "onClick": viewModel.onWidgetClick,
    "onInactive": viewModel.onInactive,
    "onKeyDown": viewModel.onWidgetKeyDown,
    "rtlEnabled": viewModel.props.rtlEnabled,
    "tabIndex": viewModel.props.tabIndex,
    "visible": viewModel.props.visible,
    "width": viewModel.props.width
  }, viewModel.restAttributes, {
    children: createVNode(1, "div", "dx-button-content", [viewModel.props.template && ButtonTemplate({
      data: _extends({
        icon,
        text
      }, templateData)
    }), !viewModel.props.template && children, isIconLeft && iconComponent, renderText && createVNode(1, "span", "dx-button-text", text, 0), !isIconLeft && iconComponent, viewModel.props.useSubmitBehavior && createVNode(64, "input", "dx-button-submit-input", null, 1, {
      "type": "submit",
      "tabIndex": -1
    }, null, viewModel.submitInputRef), viewModel.props.useInkRipple && createComponentVNode(2, InkRipple, {
      "config": viewModel.inkRippleConfig
    }, null, viewModel.inkRippleRef)], 0, null, null, viewModel.contentRef)
  }), null, viewModel.widgetRef));
};
export var ButtonProps = _extends({}, BaseWidgetProps, {
  activeStateEnabled: true,
  hoverStateEnabled: true,
  icon: "",
  iconPosition: "left",
  stylingMode: "contained",
  text: "",
  type: "normal",
  useInkRipple: false,
  useSubmitBehavior: false,
  validationGroup: undefined,
  templateData: {}
});
export var defaultOptionRules = createDefaultOptionRules([{
  device: () => devices.real().deviceType === "desktop" && !devices.isSimulator(),
  options: {
    focusStateEnabled: true
  }
}, {
  device: () => isMaterial(current()),
  options: {
    useInkRipple: true
  }
}]);
import { createReRenderEffect } from "@devextreme/vdom";
import { createRef as infernoCreateRef } from "inferno";

var getTemplate = TemplateProp => TemplateProp && (TemplateProp.defaultProps ? props => normalizeProps(createComponentVNode(2, TemplateProp, _extends({}, props))) : TemplateProp);

export class Button extends InfernoWrapperComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.contentRef = infernoCreateRef();
    this.inkRippleRef = infernoCreateRef();
    this.submitInputRef = infernoCreateRef();
    this.widgetRef = infernoCreateRef();
    this.focus = this.focus.bind(this);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
    this.submitEffect = this.submitEffect.bind(this);
    this.onActive = this.onActive.bind(this);
    this.onInactive = this.onInactive.bind(this);
    this.onWidgetClick = this.onWidgetClick.bind(this);
    this.onWidgetKeyDown = this.onWidgetKeyDown.bind(this);
  }

  createEffects() {
    return [new InfernoEffect(this.submitEffect, [this.props.onSubmit, this.props.useSubmitBehavior]), createReRenderEffect()];
  }

  updateEffects() {
    var _this$_effects$;

    (_this$_effects$ = this._effects[0]) === null || _this$_effects$ === void 0 ? void 0 : _this$_effects$.update([this.props.onSubmit, this.props.useSubmitBehavior]);
  }

  submitEffect() {
    var namespace = "UIFeedback";
    var {
      onSubmit,
      useSubmitBehavior
    } = this.props;

    if (useSubmitBehavior && onSubmit) {
      click.on(this.submitInputRef.current, event => onSubmit({
        event,
        submitInput: this.submitInputRef.current
      }), {
        namespace
      });
      return () => click.off(this.submitInputRef.current, {
        namespace
      });
    }

    return undefined;
  }

  onActive(event) {
    var {
      useInkRipple
    } = this.props;
    useInkRipple && this.inkRippleRef.current.showWave({
      element: this.contentRef.current,
      event
    });
  }

  onInactive(event) {
    var {
      useInkRipple
    } = this.props;
    useInkRipple && this.inkRippleRef.current.hideWave({
      element: this.contentRef.current,
      event
    });
  }

  onWidgetClick(event) {
    var {
      onClick,
      useSubmitBehavior,
      validationGroup
    } = this.props;
    onClick === null || onClick === void 0 ? void 0 : onClick({
      event,
      validationGroup
    });
    useSubmitBehavior && this.submitInputRef.current.click();
  }

  onWidgetKeyDown(e) {
    var {
      onKeyDown
    } = this.props;
    var {
      keyName,
      originalEvent,
      which
    } = e;
    var result = onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);

    if (result !== null && result !== void 0 && result.cancel) {
      return result;
    }

    if (keyName === "space" || which === "space" || keyName === "enter" || which === "enter") {
      originalEvent.preventDefault();
      this.onWidgetClick(originalEvent);
    }

    return undefined;
  }

  get aria() {
    var {
      icon,
      text
    } = this.props;
    var label = (text !== null && text !== void 0 ? text : "") || icon;

    if (!text && icon && getImageSourceType(icon) === "image") {
      label = !icon.includes("base64") ? icon.replace(/.+\/([^.]+)\..+$/, "$1") : "Base64";
    }

    return _extends({
      role: "button"
    }, label ? {
      label
    } : {});
  }

  get cssClasses() {
    return getCssClasses(this.props);
  }

  get iconSource() {
    var {
      icon,
      type
    } = this.props;

    if (icon || type === "back") {
      return (icon !== null && icon !== void 0 ? icon : "") || "back";
    }

    return "";
  }

  get inkRippleConfig() {
    var {
      icon,
      text,
      type
    } = this.props;
    return !text && icon || type === "back" ? {
      isCentered: true,
      useHoldAnimation: false,
      waveSizeCoefficient: 1
    } : {};
  }

  get restAttributes() {
    var _this$props = this.props,
        restProps = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return restProps;
  }

  focus() {
    this.widgetRef.current.focus();
  }

  activate() {
    this.widgetRef.current.activate();
  }

  deactivate() {
    this.widgetRef.current.deactivate();
  }

  render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props, {
        template: getTemplate(props.template)
      }),
      contentRef: this.contentRef,
      submitInputRef: this.submitInputRef,
      inkRippleRef: this.inkRippleRef,
      widgetRef: this.widgetRef,
      onActive: this.onActive,
      onInactive: this.onInactive,
      onWidgetClick: this.onWidgetClick,
      onWidgetKeyDown: this.onWidgetKeyDown,
      aria: this.aria,
      cssClasses: this.cssClasses,
      iconSource: this.iconSource,
      inkRippleConfig: this.inkRippleConfig,
      restAttributes: this.restAttributes
    });
  }

}

function __createDefaultProps() {
  return _extends({}, ButtonProps, convertRulesToOptions(defaultOptionRules));
}

Button.defaultProps = __createDefaultProps();
var __defaultOptionRules = [];
export function defaultOptions(rule) {
  __defaultOptionRules.push(rule);

  Button.defaultProps = _extends({}, __createDefaultProps(), convertRulesToOptions(__defaultOptionRules));
}