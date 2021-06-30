"use strict";

exports.restoreLocation = restoreLocation;

var _type = require("../../../../core/utils/type");

var _common = require("../../../../core/utils/common");

var _scroll_direction = require("./scroll_direction");

function restoreLocation(location, direction) {
  if ((0, _type.isPlainObject)(location)) {
    var left = (0, _common.ensureDefined)(location.left, location.x);
    var top = (0, _common.ensureDefined)(location.top, location.y);
    return {
      left: (0, _type.isDefined)(left) ? -left : undefined,
      top: (0, _type.isDefined)(top) ? -top : undefined
    };
  }

  var _ScrollDirection = new _scroll_direction.ScrollDirection(direction),
      isHorizontal = _ScrollDirection.isHorizontal,
      isVertical = _ScrollDirection.isVertical;

  return {
    left: isHorizontal ? -location : undefined,
    top: isVertical ? -location : undefined
  };
}