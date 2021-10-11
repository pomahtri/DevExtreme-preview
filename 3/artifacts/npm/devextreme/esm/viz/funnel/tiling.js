/**
* DevExtreme (esm/viz/funnel/tiling.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import { normalizeEnum as _normalizeEnum } from '../core/utils';
var algorithms = {};
var defaultAlgorithm;
export function getAlgorithm(name) {
  return algorithms[_normalizeEnum(name)] || defaultAlgorithm;
}
export function addAlgorithm(name, callback, setDefault) {
  algorithms[name] = callback;

  if (setDefault) {
    defaultAlgorithm = algorithms[name];
  }
}