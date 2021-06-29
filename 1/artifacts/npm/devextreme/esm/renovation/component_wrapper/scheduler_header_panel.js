/**
* DevExtreme (esm/renovation/component_wrapper/scheduler_header_panel.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import _extends from "@babel/runtime/helpers/esm/extends";
import Component from "./common/component";
export default class HeaderPanel extends Component {
  _setOptionsByReference() {
    super._setOptionsByReference();

    this._optionsByReference = _extends({}, this._optionsByReference, {
      dateHeaderData: true
    });
  }

}
