/**
* DevExtreme (esm/renovation/ui/grids/data_grid/datagrid_component.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DataGridBase from "../../../../ui/data_grid/ui.data_grid.base";
var DATA_GRID_NAME = "dxDataGrid";
export class DataGridComponent extends DataGridBase {
  constructor(element, options) {
    super(element, options);
    this.NAME = DATA_GRID_NAME;
  }

  _initTemplates() {}

  _updateDOMComponent() {}

  _isDimensionChangeSupported() {
    return false;
  }

}
