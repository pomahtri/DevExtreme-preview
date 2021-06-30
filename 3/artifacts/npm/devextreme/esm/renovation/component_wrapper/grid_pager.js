/**
* DevExtreme (esm/renovation/component_wrapper/grid_pager.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import Component from "./common/component";
export class GridPagerWrapper extends Component {
  _optionChanged(args) {
    switch (args.name) {
      case "pageIndex":
        {
          var pageIndexChanged = this.option("pageIndexChanged");

          if (pageIndexChanged) {
            pageIndexChanged(args.value);
          }

          break;
        }

      case "pageSize":
        {
          var pageSizeChanged = this.option("pageSizeChanged");

          if (pageSizeChanged) {
            pageSizeChanged(args.value);
          }

          break;
        }

      default:
        break;
    }

    super._optionChanged(args);
  }

}
