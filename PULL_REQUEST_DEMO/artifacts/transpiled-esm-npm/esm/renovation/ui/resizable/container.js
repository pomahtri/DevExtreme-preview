import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["children", "disabled", "handles", "height", "mainRef", "onResize", "onResizeEnd", "onResizeStart", "rtlEnabled", "width"];
import { createVNode, createComponentVNode, normalizeProps } from "inferno";
import { InfernoEffect, InfernoComponent, normalizeStyles } from "@devextreme/vdom";
import { ResizableHandle } from "./handle";
import { combineClasses } from "../../utils/combine_classes";
import { triggerResizeEvent } from "../../../events/visibility_change";

var getCssClasses = (disabled, rtlEnabled, isResizing) => combineClasses({
  "dx-resizable": true,
  "dx-state-disabled": disabled,
  "dx-rtl": rtlEnabled,
  "dx-resizable-resizing": isResizing
});

export var viewFunction = viewModel => {
  var {
    cssClasses,
    handles,
    mainRef,
    onHandleResize,
    onHandleResizeEnd,
    onHandleResizeStart,
    props,
    restAttributes,
    styles
  } = viewModel;
  var {
    children,
    disabled
  } = props;
  return normalizeProps(createVNode(1, "div", cssClasses, [children, handles.map(handleType => createComponentVNode(2, ResizableHandle, {
    "onResizeStart": event => onHandleResizeStart(event, handleType),
    "onResize": event => onHandleResize(event, handleType),
    "onResizeEnd": event => onHandleResizeEnd(event, handleType),
    "disabled": disabled,
    "direction": handleType
  }, handleType))], 0, _extends({
    "style": normalizeStyles(styles)
  }, restAttributes), null, mainRef));
};
export var ResizableContainerProps = {
  handles: [],
  children: [],
  rtlEnabled: false,
  disabled: false
};
import { convertRulesToOptions } from "../../../core/options/utils";
import { createRef as infernoCreateRef } from "inferno";
export class ResizableContainer extends InfernoComponent {
  constructor(props) {
    super(props);
    this.startX = Number.NaN;
    this.startY = Number.NaN;
    this.mainRef = infernoCreateRef();
    this.state = {
      isResizing: false
    };
    this.forwardRefInitEffect = this.forwardRefInitEffect.bind(this);
    this.onHandleResizeStart = this.onHandleResizeStart.bind(this);
    this.onHandleResize = this.onHandleResize.bind(this);
    this.onHandleResizeEnd = this.onHandleResizeEnd.bind(this);
  }

  createEffects() {
    return [new InfernoEffect(this.forwardRefInitEffect, [])];
  }

  forwardRefInitEffect() {
    if (this.props.mainRef) {
      this.props.mainRef.current = this.mainRef.current;
    }

    return undefined;
  }

  onHandleResizeStart(event, handle) {
    var _this$props$onResizeS, _this$props;

    this.setState(state => _extends({}, state, {
      isResizing: true
    }));
    this.startX = event.clientX;
    this.startY = event.clientY;
    (_this$props$onResizeS = (_this$props = this.props).onResizeStart) === null || _this$props$onResizeS === void 0 ? void 0 : _this$props$onResizeS.call(_this$props, {
      event,
      handle
    });
    event.targetElements = [];
    return undefined;
  }

  onHandleResize(event, handle) {
    var {
      onResize
    } = this.props;
    onResize === null || onResize === void 0 ? void 0 : onResize({
      event,
      handle,
      delta: {
        x: event.clientX - this.startX,
        y: event.clientY - this.startY
      }
    });
    triggerResizeEvent(this.mainRef.current);
    return undefined;
  }

  onHandleResizeEnd(event, handle) {
    var _this$props$onResizeE, _this$props2;

    this.setState(state => _extends({}, state, {
      isResizing: false
    }));
    this.startX = Number.NaN;
    this.startY = Number.NaN;
    (_this$props$onResizeE = (_this$props2 = this.props).onResizeEnd) === null || _this$props$onResizeE === void 0 ? void 0 : _this$props$onResizeE.call(_this$props2, {
      event,
      handle
    });
    return undefined;
  }

  get cssClasses() {
    var {
      disabled,
      rtlEnabled
    } = this.props;
    return getCssClasses(!!disabled, !!rtlEnabled, this.state.isResizing);
  }

  get styles() {
    var {
      height,
      width
    } = this.props;
    var style = this.restAttributes.style || {};
    return _extends({}, style, {
      height,
      width
    });
  }

  get handles() {
    var {
      handles
    } = this.props;

    if (typeof handles === "string") {
      handles = [handles];
    }

    var result = handles.map(handle => handle);

    if (result.includes("bottom")) {
      result.includes("right") && result.push("corner-bottom-right");
      result.includes("left") && result.push("corner-bottom-left");
    }

    if (result.includes("top")) {
      result.includes("right") && result.push("corner-top-right");
      result.includes("left") && result.push("corner-top-left");
    }

    return result;
  }

  get restAttributes() {
    var _this$props3 = this.props,
        restProps = _objectWithoutPropertiesLoose(_this$props3, _excluded);

    return restProps;
  }

  render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props),
      isResizing: this.state.isResizing,
      mainRef: this.mainRef,
      onHandleResizeStart: this.onHandleResizeStart,
      onHandleResize: this.onHandleResize,
      onHandleResizeEnd: this.onHandleResizeEnd,
      cssClasses: this.cssClasses,
      styles: this.styles,
      handles: this.handles,
      restAttributes: this.restAttributes
    });
  }

}

function __createDefaultProps() {
  return _extends({}, ResizableContainerProps, convertRulesToOptions([]));
}

ResizableContainer.defaultProps = __createDefaultProps();
var __defaultOptionRules = [];
export function defaultOptions(rule) {
  __defaultOptionRules.push(rule);

  ResizableContainer.defaultProps = _extends({}, __createDefaultProps(), convertRulesToOptions(__defaultOptionRules));
}