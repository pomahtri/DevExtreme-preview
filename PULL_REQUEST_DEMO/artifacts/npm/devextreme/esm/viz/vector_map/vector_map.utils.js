/**
* DevExtreme (esm/viz/vector_map/vector_map.utils.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
var nextDataKey = 1;
export function generateDataKey() {
  return 'vectormap-data-' + nextDataKey++;
}
