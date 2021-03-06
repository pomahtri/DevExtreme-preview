import registerComponent from '../../../core/component_registrator';
import SchedulerTimelineWeek from './ui.scheduler.timeline_week';
import dateUtils from '../../../core/utils/date';
import {
    getWeekendsCount,
    isDataOnWeekend,
    getFirstDayOfWeek,
    calculateStartViewDate,
} from './utils/work_week';

const toMs = dateUtils.dateToMilliseconds;

const TIMELINE_CLASS = 'dx-scheduler-timeline-work-week';
const LAST_DAY_WEEK_INDEX = 5;

class SchedulerTimelineWorkWeek extends SchedulerTimelineWeek {
    constructor(...args) {
        super(...args);

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

    _isSkippedData() { return isDataOnWeekend; }

    _incrementDate(date) {
        const day = date.getDay();
        if(day === LAST_DAY_WEEK_INDEX) {
            date.setDate(date.getDate() + 2);
        }
        super._incrementDate(date);
    }

    _getOffsetByCount(cellIndex) {
        const weekendCount = Math.floor(cellIndex / (5 * this._getCellCountInDay()));
        return toMs('day') * weekendCount * 2;
    }

    _calculateStartViewDate() {
        return calculateStartViewDate(
            this.option('currentDate'),
            this.option('startDayHour'),
            this.option('startDate'),
            this._getIntervalDuration(),
            this.option('firstDayOfWeek'),
        );
    }
}

registerComponent('dxSchedulerTimelineWorkWeek', SchedulerTimelineWorkWeek);

export default SchedulerTimelineWorkWeek;
