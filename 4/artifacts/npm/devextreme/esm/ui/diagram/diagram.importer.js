/**
* DevExtreme (esm/ui/diagram/diagram.importer.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import Errors from '../widget/ui.errors';
import DiagramDefault, * as Diagram from 'devexpress-diagram';
export function getDiagram() {
  if (!DiagramDefault) {
    throw Errors.Error('E1041', 'devexpress-diagram');
  }

  return Diagram;
}
