/**
* DevExtreme (esm/ui/scheduler/workspaces/ui.scheduler.work_space_day.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import registerComponent from '../../../core/component_registrator';
import SchedulerWorkSpaceVertical from './ui.scheduler.work_space_vertical';
import { calculateStartViewDate } from './utils/day';
var DAY_CLASS = 'dx-scheduler-work-space-day';

class SchedulerWorkSpaceDay extends SchedulerWorkSpaceVertical {
  _getElementClass() {
    return DAY_CLASS;
  }

  _getRowCount() {
    return this._getCellCountInDay();
  }

  _getCellCount() {
    return this.option('intervalCount');
  }

  _calculateStartViewDate() {
    return calculateStartViewDate(this.option('currentDate'), this.option('startDayHour'), this.option('startDate'), this._getIntervalDuration());
  }

  _getDateByIndex(headerIndex) {
    if (this.option('intervalCount') === 1) {
      return this._startViewDate;
    }

    var resultDate = new Date(this._startViewDate);
    resultDate.setDate(this._startViewDate.getDate() + headerIndex);
    return resultDate;
  }

  _renderDateHeader() {
    return this.option('intervalCount') === 1 ? null : super._renderDateHeader();
  }

  renderRHeaderPanel() {
    if (this.option('intervalCount') === 1) {
      super.renderRHeaderPanel(false);
    } else {
      super.renderRHeaderPanel(true);
    }
  }

}

registerComponent('dxSchedulerWorkSpaceDay', SchedulerWorkSpaceDay);
export default SchedulerWorkSpaceDay;
