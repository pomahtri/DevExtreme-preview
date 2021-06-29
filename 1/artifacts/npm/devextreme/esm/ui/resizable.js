/**
* DevExtreme (esm/ui/resizable.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import { locate, move } from '../animation/translator';
import registerComponent from '../core/component_registrator';
import DOMComponent from '../core/dom_component';
import $ from '../core/renderer';
import { inArray } from '../core/utils/array';
import { pairToObject } from '../core/utils/common';
import { extend } from '../core/utils/extend';
import { each } from '../core/utils/iterator';
import { fitIntoRange } from '../core/utils/math';
import { isPlainObject, isFunction, isWindow } from '../core/utils/type';
import { hasWindow } from '../core/utils/window';
import eventsEngine from '../events/core/events_engine';
import { start as dragEventStart, move as dragEventMove, end as dragEventEnd } from '../events/drag';
import { getBoundingRect } from '../core/utils/position';
import { addNamespace } from '../events/utils/index';
import { triggerResizeEvent } from '../events/visibility_change';
var RESIZABLE = 'dxResizable';
var RESIZABLE_CLASS = 'dx-resizable';
var RESIZABLE_RESIZING_CLASS = 'dx-resizable-resizing';
var RESIZABLE_HANDLE_CLASS = 'dx-resizable-handle';
var RESIZABLE_HANDLE_TOP_CLASS = 'dx-resizable-handle-top';
var RESIZABLE_HANDLE_BOTTOM_CLASS = 'dx-resizable-handle-bottom';
var RESIZABLE_HANDLE_LEFT_CLASS = 'dx-resizable-handle-left';
var RESIZABLE_HANDLE_RIGHT_CLASS = 'dx-resizable-handle-right';
var RESIZABLE_HANDLE_CORNER_CLASS = 'dx-resizable-handle-corner';
var DRAGSTART_START_EVENT_NAME = addNamespace(dragEventStart, RESIZABLE);
var DRAGSTART_EVENT_NAME = addNamespace(dragEventMove, RESIZABLE);
var DRAGSTART_END_EVENT_NAME = addNamespace(dragEventEnd, RESIZABLE);
var SIDE_BORDER_WIDTH_STYLES = {
  'left': 'borderLeftWidth',
  'top': 'borderTopWidth',
  'right': 'borderRightWidth',
  'bottom': 'borderBottomWidth'
};
var Resizable = DOMComponent.inherit({
  _getDefaultOptions: function _getDefaultOptions() {
    return extend(this.callBase(), {
      handles: 'all',
      step: '1',

      /**
      * @name dxResizableOptions.stepPrecision
      * @type string
      * @default "simple"
      * @acceptValues 'simple'|'strict'
      * @hidden
      */
      stepPrecision: 'simple',
      area: undefined,
      minWidth: 30,
      maxWidth: Infinity,
      minHeight: 30,
      maxHeight: Infinity,
      onResizeStart: null,
      onResize: null,
      onResizeEnd: null,
      roundStepValue: true
    });
  },
  _init: function _init() {
    this.callBase();
    this.$element().addClass(RESIZABLE_CLASS);
  },
  _initMarkup: function _initMarkup() {
    this.callBase();

    this._renderHandles();
  },
  _render: function _render() {
    this.callBase();

    this._renderActions();
  },
  _renderActions: function _renderActions() {
    this._resizeStartAction = this._createActionByOption('onResizeStart');
    this._resizeEndAction = this._createActionByOption('onResizeEnd');
    this._resizeAction = this._createActionByOption('onResize');
  },
  _renderHandles: function _renderHandles() {
    this._handles = [];
    var handles = this.option('handles');

    if (handles === 'none') {
      return;
    }

    var directions = handles === 'all' ? ['top', 'bottom', 'left', 'right'] : handles.split(' ');
    each(directions, (index, handleName) => {
      this._renderHandle(handleName);
    });
    inArray('bottom', directions) + 1 && inArray('right', directions) + 1 && this._renderHandle('corner-bottom-right');
    inArray('bottom', directions) + 1 && inArray('left', directions) + 1 && this._renderHandle('corner-bottom-left');
    inArray('top', directions) + 1 && inArray('right', directions) + 1 && this._renderHandle('corner-top-right');
    inArray('top', directions) + 1 && inArray('left', directions) + 1 && this._renderHandle('corner-top-left');

    this._attachEventHandlers();
  },
  _renderHandle: function _renderHandle(handleName) {
    var $handle = $('<div>').addClass(RESIZABLE_HANDLE_CLASS).addClass(RESIZABLE_HANDLE_CLASS + '-' + handleName).appendTo(this.$element());

    this._handles.push($handle);
  },
  _attachEventHandlers: function _attachEventHandlers() {
    if (this.option('disabled')) {
      return;
    }

    var handlers = {};
    handlers[DRAGSTART_START_EVENT_NAME] = this._dragStartHandler.bind(this);
    handlers[DRAGSTART_EVENT_NAME] = this._dragHandler.bind(this);
    handlers[DRAGSTART_END_EVENT_NAME] = this._dragEndHandler.bind(this);

    this._handles.forEach(handleElement => {
      eventsEngine.on(handleElement, handlers, {
        direction: 'both',
        immediate: true
      });
    });
  },
  _detachEventHandlers: function _detachEventHandlers() {
    this._handles.forEach(handleElement => {
      eventsEngine.off(handleElement);
    });
  },
  _toggleEventHandlers: function _toggleEventHandlers(shouldAttachEvents) {
    shouldAttachEvents ? this._attachEventHandlers() : this._detachEventHandlers();
  },
  _dragStartHandler: function _dragStartHandler(e) {
    var $element = this.$element();

    if ($element.is('.dx-state-disabled, .dx-state-disabled *')) {
      e.cancel = true;
      return;
    }

    this._toggleResizingClass(true);

    this._movingSides = this._getMovingSides(e);
    this._elementLocation = locate($element);
    var elementRect = getBoundingRect($element.get(0));
    this._elementSize = {
      width: elementRect.width,
      height: elementRect.height
    };

    this._renderDragOffsets(e);

    this._resizeStartAction({
      event: e,
      width: this._elementSize.width,
      height: this._elementSize.height,
      handles: this._movingSides
    });

    e.targetElements = null;
  },
  _toggleResizingClass: function _toggleResizingClass(value) {
    this.$element().toggleClass(RESIZABLE_RESIZING_CLASS, value);
  },
  _renderDragOffsets: function _renderDragOffsets(e) {
    var area = this._getArea();

    if (!area) {
      return;
    }

    var $handle = $(e.target).closest('.' + RESIZABLE_HANDLE_CLASS);
    var handleWidth = $handle.outerWidth();
    var handleHeight = $handle.outerHeight();
    var handleOffset = $handle.offset();
    var areaOffset = area.offset;

    var scrollOffset = this._getAreaScrollOffset();

    e.maxLeftOffset = handleOffset.left - areaOffset.left - scrollOffset.scrollX;
    e.maxRightOffset = areaOffset.left + area.width - handleOffset.left - handleWidth + scrollOffset.scrollX;
    e.maxTopOffset = handleOffset.top - areaOffset.top - scrollOffset.scrollY;
    e.maxBottomOffset = areaOffset.top + area.height - handleOffset.top - handleHeight + scrollOffset.scrollY;
  },
  _getBorderWidth: function _getBorderWidth($element, direction) {
    if (isWindow($element.get(0))) return 0;
    var borderWidth = $element.css(SIDE_BORDER_WIDTH_STYLES[direction]);
    return parseInt(borderWidth) || 0;
  },
  _dragHandler: function _dragHandler(e) {
    var $element = this.$element();
    var sides = this._movingSides;
    var location = this._elementLocation;
    var size = this._elementSize;

    var offset = this._getOffset(e);

    var width = size.width + offset.x * (sides.left ? -1 : 1);
    var height = size.height + offset.y * (sides.top ? -1 : 1);
    if (offset.x || this.option('stepPrecision') === 'strict') this._renderWidth(width);
    if (offset.y || this.option('stepPrecision') === 'strict') this._renderHeight(height);
    var elementRect = getBoundingRect($element.get(0));
    var offsetTop = offset.y - ((elementRect.height || height) - height);
    var offsetLeft = offset.x - ((elementRect.width || width) - width);
    move($element, {
      top: location.top + (sides.top ? offsetTop : 0),
      left: location.left + (sides.left ? offsetLeft : 0)
    });

    this._resizeAction({
      event: e,
      width: this.option('width') || width,
      height: this.option('height') || height,
      handles: this._movingSides
    });

    triggerResizeEvent($element);
  },
  _getOffset: function _getOffset(e) {
    var offset = e.offset;
    var steps = pairToObject(this.option('step'), !this.option('roundStepValue'));

    var sides = this._getMovingSides(e);

    var strictPrecision = this.option('stepPrecision') === 'strict';
    if (!sides.left && !sides.right) offset.x = 0;
    if (!sides.top && !sides.bottom) offset.y = 0;
    return strictPrecision ? this._getStrictOffset(offset, steps, sides) : this._getSimpleOffset(offset, steps);
  },
  _getSimpleOffset: function _getSimpleOffset(offset, steps) {
    return {
      x: offset.x - offset.x % steps.h,
      y: offset.y - offset.y % steps.v
    };
  },
  _getStrictOffset: function _getStrictOffset(offset, steps, sides) {
    var location = this._elementLocation;
    var size = this._elementSize;
    var xPos = sides.left ? location.left : location.left + size.width;
    var yPos = sides.top ? location.top : location.top + size.height;
    var newXShift = (xPos + offset.x) % steps.h;
    var newYShift = (yPos + offset.y) % steps.v;

    var sign = Math.sign || (x => {
      x = +x;

      if (x === 0 || isNaN(x)) {
        return x;
      }

      return x > 0 ? 1 : -1;
    });

    var separatorOffset = (steps, offset) => {
      return (1 + sign(offset) * 0.2) % 1 * steps;
    };

    var isSmallOffset = (offset, steps) => {
      return Math.abs(offset) < 0.2 * steps;
    };

    var newOffsetX = offset.x - newXShift;
    var newOffsetY = offset.y - newYShift;

    if (newXShift > separatorOffset(steps.h, offset.x)) {
      newOffsetX += steps.h;
    }

    if (newYShift > separatorOffset(steps.v, offset.y)) {
      newOffsetY += steps.v;
    }

    return {
      x: (sides.left || sides.right) && !isSmallOffset(offset.x, steps.h) ? newOffsetX : 0,
      y: (sides.top || sides.bottom) && !isSmallOffset(offset.y, steps.v) ? newOffsetY : 0
    };
  },
  _getMovingSides: function _getMovingSides(e) {
    var $target = $(e.target);
    var hasCornerTopLeftClass = $target.hasClass(RESIZABLE_HANDLE_CORNER_CLASS + '-top-left');
    var hasCornerTopRightClass = $target.hasClass(RESIZABLE_HANDLE_CORNER_CLASS + '-top-right');
    var hasCornerBottomLeftClass = $target.hasClass(RESIZABLE_HANDLE_CORNER_CLASS + '-bottom-left');
    var hasCornerBottomRightClass = $target.hasClass(RESIZABLE_HANDLE_CORNER_CLASS + '-bottom-right');
    return {
      'top': $target.hasClass(RESIZABLE_HANDLE_TOP_CLASS) || hasCornerTopLeftClass || hasCornerTopRightClass,
      'left': $target.hasClass(RESIZABLE_HANDLE_LEFT_CLASS) || hasCornerTopLeftClass || hasCornerBottomLeftClass,
      'bottom': $target.hasClass(RESIZABLE_HANDLE_BOTTOM_CLASS) || hasCornerBottomLeftClass || hasCornerBottomRightClass,
      'right': $target.hasClass(RESIZABLE_HANDLE_RIGHT_CLASS) || hasCornerTopRightClass || hasCornerBottomRightClass
    };
  },
  _getArea: function _getArea() {
    var area = this.option('area');

    if (isFunction(area)) {
      area = area.call(this);
    }

    if (isPlainObject(area)) {
      return this._getAreaFromObject(area);
    }

    return this._getAreaFromElement(area);
  },
  _getAreaScrollOffset: function _getAreaScrollOffset() {
    var area = this.option('area');
    var isElement = !isFunction(area) && !isPlainObject(area);
    var scrollOffset = {
      scrollY: 0,
      scrollX: 0
    };

    if (isElement) {
      var areaElement = $(area)[0];

      if (isWindow(areaElement)) {
        scrollOffset.scrollX = areaElement.pageXOffset;
        scrollOffset.scrollY = areaElement.pageYOffset;
      }
    }

    return scrollOffset;
  },
  _getAreaFromObject: function _getAreaFromObject(area) {
    var result = {
      width: area.right - area.left,
      height: area.bottom - area.top,
      offset: {
        left: area.left,
        top: area.top
      }
    };

    this._correctAreaGeometry(result);

    return result;
  },
  _getAreaFromElement: function _getAreaFromElement(area) {
    var $area = $(area);
    var result;

    if ($area.length) {
      result = {
        width: $area.innerWidth(),
        height: $area.innerHeight(),
        offset: extend({
          top: 0,
          left: 0
        }, isWindow($area[0]) ? {} : $area.offset())
      };

      this._correctAreaGeometry(result, $area);
    }

    return result;
  },
  _correctAreaGeometry: function _correctAreaGeometry(result, $area) {
    var areaBorderLeft = $area ? this._getBorderWidth($area, 'left') : 0;
    var areaBorderTop = $area ? this._getBorderWidth($area, 'top') : 0;
    result.offset.left += areaBorderLeft + this._getBorderWidth(this.$element(), 'left');
    result.offset.top += areaBorderTop + this._getBorderWidth(this.$element(), 'top');
    result.width -= this.$element().outerWidth() - this.$element().innerWidth();
    result.height -= this.$element().outerHeight() - this.$element().innerHeight();
  },
  _dragEndHandler: function _dragEndHandler(e) {
    var $element = this.$element();

    this._resizeEndAction({
      event: e,
      width: $element.outerWidth(),
      height: $element.outerHeight(),
      handles: this._movingSides
    });

    this._toggleResizingClass(false);
  },
  _renderWidth: function _renderWidth(width) {
    this.option('width', fitIntoRange(width, this.option('minWidth'), this.option('maxWidth')));
  },
  _renderHeight: function _renderHeight(height) {
    this.option('height', fitIntoRange(height, this.option('minHeight'), this.option('maxHeight')));
  },
  _optionChanged: function _optionChanged(args) {
    switch (args.name) {
      case 'disabled':
        this._toggleEventHandlers(!args.value);

        this.callBase(args);
        break;

      case 'handles':
        this._invalidate();

        break;

      case 'minWidth':
      case 'maxWidth':
        hasWindow() && this._renderWidth(this.$element().outerWidth());
        break;

      case 'minHeight':
      case 'maxHeight':
        hasWindow() && this._renderHeight(this.$element().outerHeight());
        break;

      case 'onResize':
      case 'onResizeStart':
      case 'onResizeEnd':
        this._renderActions();

        break;

      case 'area':
      case 'stepPrecision':
      case 'step':
      case 'roundStepValue':
        break;

      default:
        this.callBase(args);
        break;
    }
  },
  _clean: function _clean() {
    this.$element().find('.' + RESIZABLE_HANDLE_CLASS).remove();
  },
  _useTemplates: function _useTemplates() {
    return false;
  }
});
registerComponent(RESIZABLE, Resizable);
export default Resizable;
