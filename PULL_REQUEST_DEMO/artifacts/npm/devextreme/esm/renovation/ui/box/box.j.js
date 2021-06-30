/**
* DevExtreme (esm/renovation/ui/box/box.j.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import registerComponent from "../../../core/component_registrator";
import BaseComponent from "../../component_wrapper/common/component";
import { Box as BoxComponent, defaultOptions } from "./box";
export default class Box extends BaseComponent {
  get _propsInfo() {
    return {
      twoWay: [],
      allowNull: [],
      elements: [],
      templates: [],
      props: ["direction", "align", "crossAlign"]
    };
  }

  get _viewComponent() {
    return BoxComponent;
  }

}
registerComponent("dxBox", Box);
Box.defaultOptions = defaultOptions;