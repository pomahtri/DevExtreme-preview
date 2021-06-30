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