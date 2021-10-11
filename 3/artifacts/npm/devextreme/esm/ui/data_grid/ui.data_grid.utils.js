/**
* DevExtreme (esm/ui/data_grid/ui.data_grid.utils.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import gridCoreUtils from '../grid_core/ui.grid_core.utils';
import dataUtils from '../../data/utils';
export function createGroupFilter(path, storeLoadOptions) {
  var groups = dataUtils.normalizeSortingInfo(storeLoadOptions.group);
  var filter = [];

  for (var i = 0; i < path.length; i++) {
    filter.push([groups[i].selector, '=', path[i]]);
  }

  if (storeLoadOptions.filter) {
    filter.push(storeLoadOptions.filter);
  }

  return gridCoreUtils.combineFilters(filter);
}