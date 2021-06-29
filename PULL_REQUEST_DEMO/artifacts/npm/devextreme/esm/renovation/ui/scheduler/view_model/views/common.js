/**
* DevExtreme (esm/renovation/ui/scheduler/view_model/views/common.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import dateUtils from "../../../../../core/utils/date";
export var getCurrentDate = (currentDate, startDate) => {
  var validCurrentDate = startDate !== null && startDate !== void 0 ? startDate : currentDate;
  return dateUtils.trimTime(validCurrentDate);
};
export var getFirstDayOfWeek = (includedDays, firstDayOfWeek) => {
  var isFirstDayOfWeekInIncludedDays = includedDays.includes(firstDayOfWeek);
  var sortedIncludedDays = includedDays.slice().sort((a, b) => a - b);
  return isFirstDayOfWeekInIncludedDays ? firstDayOfWeek : sortedIncludedDays[0];
};
export var getStartViewDate = (_startDayHour, _firstDayOfWeek, currentDate) => currentDate;
