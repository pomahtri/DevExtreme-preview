/**
* DevExtreme (esm/ui/scheduler/workspaces/ui.scheduler.timeline_work_week.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import registerComponent from '../../../core/component_registrator';
import SchedulerTimelineWeek from './ui.scheduler.timeline_week';
import dateUtils from '../../../core/utils/date';
import { getWeekendsCount, isDataOnWeekend, getFirstDayOfWeek, calculateStartViewDate } from './utils/work_week';
var toMs = dateUtils.dateToMilliseconds;
var TIMELINE_CLASS = 'dx-scheduler-timeline-work-week';
var LAST_DAY_WEEK_INDEX = 5;

class SchedulerTimelineWorkWeek extends SchedulerTimelineWeek {
  constructor() {
    super(...arguments);
    this._getWeekendsCount = getWeekendsCount;
    this._isSkippedData = isDataOnWeekend;
  }

  _getElementClass() {
    return TIMELINE_CLASS;
  }

  _getWeekDuration() {
    return 5;
  }

  _firstDayOfWeek() {
    return getFirstDayOfWeek(this.option('firstDayOfWeek'));
  }

  _isSkippedData() {
    return isDataOnWeekend;
  }

  _incrementDate(date) {
    var day = date.getDay();

    if (day === LAST_DAY_WEEK_INDEX) {
      date.setDate(date.getDate() + 2);
    }

    super._incrementDate(date);
  }

  _getOffsetByCount(cellIndex) {
    var weekendCount = Math.floor(cellIndex / (5 * this._getCellCountInDay()));
    return toMs('day') * weekendCount * 2;
  }

  _calculateStartViewDate() {
    return calculateStartViewDate(this.option('currentDate'), this.option('startDayHour'), this.option('startDate'), this._getIntervalDuration(), this.option('firstDayOfWeek'));
  }

}

registerComponent('dxSchedulerTimelineWorkWeek', SchedulerTimelineWorkWeek);
export default SchedulerTimelineWorkWeek;
