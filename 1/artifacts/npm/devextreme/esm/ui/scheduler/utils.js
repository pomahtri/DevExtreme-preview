/**
* DevExtreme (esm/ui/scheduler/utils.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import $ from '../../core/renderer';
import { extend } from '../../core/utils/extend';
import { each } from '../../core/utils/iterator';
import { getResourceManager } from './instanceFactory';
import { APPOINTMENT_SETTINGS_KEY } from './constants';
export var utils = {
  dataAccessors: {
    getAppointmentSettings: element => {
      return $(element).data(APPOINTMENT_SETTINGS_KEY);
    },
    getAppointmentInfo: element => {
      var settings = utils.dataAccessors.getAppointmentSettings(element);
      return settings === null || settings === void 0 ? void 0 : settings.info;
    },
    combine: (key, dataAccessors) => {
      // TODO get rid of it and rework resourceManager
      var result = extend(true, {}, dataAccessors);
      var resourceManager = getResourceManager(key);

      if (dataAccessors && resourceManager) {
        each(resourceManager._dataAccessors, (type, accessor) => {
          result[type].resources = accessor;
        });
      }

      return result;
    }
  }
};
