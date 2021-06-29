/**
* DevExtreme (renovation/ui/scroll_view/utils/get_scroll_top_max.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.getScrollTopMax = getScrollTopMax;

function getScrollTopMax(element) {
  return element.scrollHeight - element.clientHeight;
}
