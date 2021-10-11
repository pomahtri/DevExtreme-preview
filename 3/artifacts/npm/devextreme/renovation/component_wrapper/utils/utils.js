/**
* DevExtreme (renovation/component_wrapper/utils/utils.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.getAriaName = getAriaName;
exports.removeDifferentElements = exports.addAttributes = void 0;

var _iterator = require("../../../core/utils/iterator");

var addAttributes = function addAttributes($element, attributes) {
  (0, _iterator.each)(attributes, function (_, _ref) {
    var name = _ref.name,
        value = _ref.value;

    if (name === "class") {
      $element.addClass(value);
    } else {
      $element.attr(name, value);
    }
  });
};

exports.addAttributes = addAttributes;

function getAriaName(name) {
  return name === "role" || name === "id" ? name : "aria-".concat(name);
}

var removeDifferentElements = function removeDifferentElements($children, $newChildren) {
  (0, _iterator.each)($newChildren, function (__, element) {
    var hasComponent = false;
    (0, _iterator.each)($children, function (_, oldElement) {
      if (element === oldElement) {
        hasComponent = true;
      }
    });

    if (!hasComponent && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
};

exports.removeDifferentElements = removeDifferentElements;