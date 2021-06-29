/**
* DevExtreme (cjs/renovation/utils/type_conversion.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.toNumber = toNumber;

function toNumber(attribute) {
  return attribute ? Number(attribute.replace("px", "")) : 0;
}
