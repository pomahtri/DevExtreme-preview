/**
* DevExtreme (cjs/renovation/ui/scheduler/view_model/views/timeline_month.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.getStartViewDate = void 0;

var _date = _interopRequireDefault(require("../../../../../core/utils/date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStartViewDate = function getStartViewDate(startDayHour, _firstDayOfWeek, currentDate) {
  var result = _date.default.getFirstMonthDate(currentDate);

  result.setHours(startDayHour);
  return result;
};

exports.getStartViewDate = getStartViewDate;