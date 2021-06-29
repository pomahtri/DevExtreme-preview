/**
* DevExtreme (esm/renovation/ui/scheduler/view_model/views/week.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import dateUtils from "../../../../../core/utils/date";
export var getStartViewDate = (startDayHour, firstDayOfWeek, currentDate) => {
  var result = dateUtils.getFirstWeekDate(currentDate, firstDayOfWeek);
  result.setHours(startDayHour);
  return result;
};
