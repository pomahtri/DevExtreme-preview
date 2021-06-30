/**
* DevExtreme (cjs/ui/scheduler/workspaces/ui.scheduler.timeline_day.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _component_registrator = _interopRequireDefault(require("../../../core/component_registrator"));

var _uiScheduler = _interopRequireDefault(require("./ui.scheduler.timeline"));

var _day = require("./utils/day");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TIMELINE_CLASS = 'dx-scheduler-timeline-day';

var SchedulerTimelineDay = /*#__PURE__*/function (_SchedulerTimeline) {
  _inheritsLoose(SchedulerTimelineDay, _SchedulerTimeline);

  function SchedulerTimelineDay() {
    return _SchedulerTimeline.apply(this, arguments) || this;
  }

  var _proto = SchedulerTimelineDay.prototype;

  _proto._getElementClass = function _getElementClass() {
    return TIMELINE_CLASS;
  };

  _proto._calculateStartViewDate = function _calculateStartViewDate() {
    return (0, _day.calculateStartViewDate)(this.option('currentDate'), this.option('startDayHour'), this.option('startDate'), this._getIntervalDuration());
  };

  _proto._needRenderWeekHeader = function _needRenderWeekHeader() {
    return this._isWorkSpaceWithCount();
  };

  return SchedulerTimelineDay;
}(_uiScheduler.default);

(0, _component_registrator.default)('dxSchedulerTimelineDay', SchedulerTimelineDay);
var _default = SchedulerTimelineDay;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
