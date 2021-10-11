/**
* DevExtreme (esm/renovation/ui/scheduler/view_model/views/month.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import dateUtils from "../../../../../core/utils/date";
export var getStartViewDate = (startDayHour, firstDayOfWeek, currentDate) => {
  var firstMonthDate = dateUtils.getFirstMonthDate(currentDate);
  var result = dateUtils.getFirstWeekDate(firstMonthDate, firstDayOfWeek);
  result.setHours(startDayHour);
  return result;
};