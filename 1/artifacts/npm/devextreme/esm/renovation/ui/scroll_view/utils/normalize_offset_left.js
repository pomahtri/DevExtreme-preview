/**
* DevExtreme (esm/renovation/ui/scroll_view/utils/normalize_offset_left.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import getScrollRtlBehavior from "../../../../core/utils/scroll_rtl_behavior";

function isScrollInverted(rtlEnabled) {
  var {
    decreasing,
    positive
  } = getScrollRtlBehavior();
  return rtlEnabled && !!(decreasing ^ positive);
}

export function getScrollSign(rtlEnabled) {
  return isScrollInverted(rtlEnabled) && getScrollRtlBehavior().positive ? -1 : 1;
}
export function normalizeOffsetLeft(scrollLeft, maxLeftOffset, rtlEnabled) {
  if (isScrollInverted(rtlEnabled)) {
    if (getScrollRtlBehavior().positive) {
      return maxLeftOffset - scrollLeft;
    }

    return maxLeftOffset + scrollLeft;
  }

  return scrollLeft;
}
