/**
* DevExtreme (esm/renovation/ui/scroll_view/utils/is_element_visible.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
export function isVisible(element) {
  return element.offsetWidth > 0 || element.offsetHeight > 0;
}
