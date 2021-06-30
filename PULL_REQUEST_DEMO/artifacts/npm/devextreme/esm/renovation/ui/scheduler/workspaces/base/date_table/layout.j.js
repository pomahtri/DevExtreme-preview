/**
* DevExtreme (esm/renovation/ui/scheduler/workspaces/base/date_table/layout.j.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import registerComponent from "../../../../../../core/component_registrator";
import BaseComponent from "../../../../../component_wrapper/common/component";
import { DateTableLayoutBase as DateTableLayoutBaseComponent, defaultOptions } from "./layout";
export default class DateTableLayoutBase extends BaseComponent {
  get _propsInfo() {
    return {
      twoWay: [],
      allowNull: [],
      elements: [],
      templates: ["cellTemplate", "dataCellTemplate"],
      props: ["cellTemplate", "viewData", "groupOrientation", "leftVirtualCellWidth", "rightVirtualCellWidth", "topVirtualRowHeight", "bottomVirtualRowHeight", "addDateTableClass", "dataCellTemplate"]
    };
  }

  get _viewComponent() {
    return DateTableLayoutBaseComponent;
  }

}
registerComponent("dxDateTableLayoutBase", DateTableLayoutBase);
DateTableLayoutBase.defaultOptions = defaultOptions;