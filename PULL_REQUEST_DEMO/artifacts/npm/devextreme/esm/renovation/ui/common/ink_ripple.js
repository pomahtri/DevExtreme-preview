/**
* DevExtreme (esm/renovation/ui/common/ink_ripple.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["config"];
import { createVNode, normalizeProps } from "inferno";
import { BaseInfernoComponent } from "@devextreme/vdom";
import { initConfig, showWave, hideWave } from "../../../ui/widget/utils.ink_ripple";
export var viewFunction = model => normalizeProps(createVNode(1, "div", "dx-inkripple", null, 1, _extends({}, model.restAttributes)));
export var InkRippleProps = {
  config: {}
};
export class InkRipple extends BaseInfernoComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.hideWave = this.hideWave.bind(this);
    this.showWave = this.showWave.bind(this);
  }

  get getConfig() {
    var {
      config
    } = this.props;
    return initConfig(config);
  }

  get restAttributes() {
    var _this$props = this.props,
        restProps = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return restProps;
  }

  hideWave(opts) {
    hideWave(this.getConfig, opts);
  }

  showWave(opts) {
    showWave(this.getConfig, opts);
  }

  render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props),
      getConfig: this.getConfig,
      restAttributes: this.restAttributes
    });
  }

}
InkRipple.defaultProps = _extends({}, InkRippleProps);