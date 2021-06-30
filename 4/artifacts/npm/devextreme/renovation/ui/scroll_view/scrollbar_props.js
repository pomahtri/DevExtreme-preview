/**
* DevExtreme (renovation/ui/scroll_view/scrollbar_props.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.ScrollbarProps = void 0;

var _noop = _interopRequireDefault(require("../../utils/noop"));

var _consts = require("./common/consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollbarProps = {
  activeStateEnabled: false,
  containerSize: 0,
  contentSize: 0,
  topPocketSize: 0,
  bottomPocketSize: 0,
  scrollableOffset: 0,
  isScrollableHovered: false,
  forceVisibility: false,
  forceUpdateScrollbarLocation: false,
  scrollLocation: 0,
  pocketState: _consts.TopPocketState.STATE_RELEASED,
  onAnimatorCancel: _noop.default,
  onPullDown: _noop.default,
  onReachBottom: _noop.default,
  onRelease: _noop.default,
  onScroll: _noop.default,
  onEnd: _noop.default
};
exports.ScrollbarProps = ScrollbarProps;
