/**
* DevExtreme (time_zone_utils.d.ts)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
/**
 * @docid
 */
export interface dxSchedulerTimeZone {
    /**
     * @docid
     */
    id: string;
    /**
     * @docid
     */
    offset: number;
    /**
     * @docid
     */
    title: string;
}

/**
 * @docid utils.getTimeZones
 * @publicName getTimeZones(date)
 * @param1 date:Date|undefined
 * @return Array<dxSchedulerTimeZone>
 * @namespace DevExpress.utils
 * @module time_zone_utils
 * @export getTimeZones
 * @static
 * @public
 */
export function getTimeZones(date?: Date): Array<dxSchedulerTimeZone>;
