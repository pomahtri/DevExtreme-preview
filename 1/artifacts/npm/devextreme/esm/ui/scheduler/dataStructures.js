/**
* DevExtreme (esm/ui/scheduler/dataStructures.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
export class AppointmentTooltipInfo {
  constructor(appointment) {
    var targetedAppointment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    // TODO
    this.appointment = appointment;
    this.targetedAppointment = targetedAppointment;
    this.color = color;
    this.settings = settings;
  }

}
