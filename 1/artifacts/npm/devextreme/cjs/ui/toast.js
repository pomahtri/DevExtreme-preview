/**
* DevExtreme (cjs/ui/toast.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../core/renderer"));

var _window = require("../core/utils/window");

var _dom_adapter = _interopRequireDefault(require("../core/dom_adapter"));

var _events_engine = _interopRequireDefault(require("../events/core/events_engine"));

var _ready_callbacks = _interopRequireDefault(require("../core/utils/ready_callbacks"));

var _common = require("../core/utils/common");

var _type = require("../core/utils/type");

var _extend = require("../core/utils/extend");

var _array = require("../core/utils/array");

var _pointer = _interopRequireDefault(require("../events/pointer"));

var _component_registrator = _interopRequireDefault(require("../core/component_registrator"));

var _ui = _interopRequireDefault(require("./overlay/ui.overlay"));

var _themes = require("./themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var window = (0, _window.getWindow)();
var ready = _ready_callbacks.default.add; // STYLE toast

var TOAST_CLASS = 'dx-toast';
var TOAST_CLASS_PREFIX = TOAST_CLASS + '-';
var TOAST_WRAPPER_CLASS = TOAST_CLASS_PREFIX + 'wrapper';
var TOAST_CONTENT_CLASS = TOAST_CLASS_PREFIX + 'content';
var TOAST_MESSAGE_CLASS = TOAST_CLASS_PREFIX + 'message';
var TOAST_ICON_CLASS = TOAST_CLASS_PREFIX + 'icon';
var WIDGET_NAME = 'dxToast';
var toastTypes = ['info', 'warning', 'error', 'success'];
var TOAST_STACK = [];
var FIRST_Z_INDEX_OFFSET = 8000;
var visibleToastInstance = null;
var POSITION_ALIASES = {
  'top': {
    my: 'top',
    at: 'top',
    of: null,
    offset: '0 0'
  },
  'bottom': {
    my: 'bottom',
    at: 'bottom',
    of: null,
    offset: '0 -20'
  },
  'center': {
    my: 'center',
    at: 'center',
    of: null,
    offset: '0 0'
  },
  'right': {
    my: 'center right',
    at: 'center right',
    of: null,
    offset: '0 0'
  },
  'left': {
    my: 'center left',
    at: 'center left',
    of: null,
    offset: '0 0'
  }
};
ready(function () {
  _events_engine.default.subscribeGlobal(_dom_adapter.default.getDocument(), _pointer.default.down, function (e) {
    for (var i = TOAST_STACK.length - 1; i >= 0; i--) {
      if (!TOAST_STACK[i]._proxiedDocumentDownHandler(e)) {
        return;
      }
    }
  });
});

var Toast = _ui.default.inherit({
  _getDefaultOptions: function _getDefaultOptions() {
    return (0, _extend.extend)(this.callBase(), {
      message: '',
      type: 'info',
      displayTime: 2000,
      position: 'bottom center',
      animation: {
        show: {
          type: 'fade',
          duration: 400,
          from: 0,
          to: 1
        },
        hide: {
          type: 'fade',
          duration: 400,
          to: 0
        }
      },
      shading: false,

      /**
      * @name dxToastOptions.disabled
      * @hidden
      */
      height: 'auto',
      hideTopOverlayHandler: null,
      closeOnSwipe: true,
      closeOnClick: false,

      /**
      * @name dxToastOptions.resizeEnabled
      * @hidden
      */
      resizeEnabled: false
      /**
      * @name dxToastOptions.dragEnabled
      * @hidden
      */

    });
  },
  _defaultOptionsRules: function _defaultOptionsRules() {
    return this.callBase().concat([{
      device: {
        platform: 'android'
      },
      options: {
        closeOnOutsideClick: true,
        width: 'auto',
        position: {
          at: 'bottom left',
          my: 'bottom left',
          offset: '20 -20'
        },
        animation: {
          show: {
            type: 'slide',
            duration: 200,
            from: {
              position: {
                my: 'top',
                at: 'bottom',
                of: window
              }
            }
          },
          hide: {
            type: 'slide',
            duration: 200,
            to: {
              position: {
                my: 'top',
                at: 'bottom',
                of: window
              }
            }
          }
        }
      }
    }, {
      device: function device(_device) {
        var isPhone = _device.deviceType === 'phone';
        var isAndroid = _device.platform === 'android';
        return isPhone && isAndroid;
      },
      options: {
        width: function width() {
          var _window$visualViewpor;

          return (window === null || window === void 0 ? void 0 : (_window$visualViewpor = window.visualViewport) === null || _window$visualViewpor === void 0 ? void 0 : _window$visualViewpor.width) || (0, _renderer.default)(window).width();
        },
        position: {
          at: 'bottom center',
          my: 'bottom center',
          offset: '0 0'
        }
      }
    }, {
      device: function device(_device2) {
        return _device2.deviceType === 'phone';
      },
      options: {
        width: function width() {
          var _window$visualViewpor2;

          return (window === null || window === void 0 ? void 0 : (_window$visualViewpor2 = window.visualViewport) === null || _window$visualViewpor2 === void 0 ? void 0 : _window$visualViewpor2.width) || (0, _renderer.default)(window).width();
        }
      }
    }, {
      device: function device() {
        return (0, _themes.isMaterial)();
      },
      options: {
        minWidth: 344,
        maxWidth: 568,
        displayTime: 4000
      }
    }]);
  },
  _init: function _init() {
    this.callBase();

    this._posStringToObject();
  },
  _renderContentImpl: function _renderContentImpl() {
    if (this.option('message')) {
      this._message = (0, _renderer.default)('<div>').addClass(TOAST_MESSAGE_CLASS).text(this.option('message')).appendTo(this.$content());
    }

    this.setAria('role', 'alert', this._message);

    if ((0, _array.inArray)(this.option('type').toLowerCase(), toastTypes) > -1) {
      this.$content().prepend((0, _renderer.default)('<div>').addClass(TOAST_ICON_CLASS));
    }

    this.callBase();
  },
  _render: function _render() {
    this.callBase();
    this.$element().addClass(TOAST_CLASS);
    this.$wrapper().addClass(TOAST_WRAPPER_CLASS);
    this.$content().addClass(TOAST_CLASS_PREFIX + String(this.option('type')).toLowerCase());
    this.$content().addClass(TOAST_CONTENT_CLASS);

    this._toggleCloseEvents('Swipe');

    this._toggleCloseEvents('Click');
  },
  _renderScrollTerminator: _common.noop,
  _toggleCloseEvents: function _toggleCloseEvents(event) {
    var dxEvent = 'dx' + event.toLowerCase();

    _events_engine.default.off(this.$content(), dxEvent);

    this.option('closeOn' + event) && _events_engine.default.on(this.$content(), dxEvent, this.hide.bind(this));
  },
  _posStringToObject: function _posStringToObject() {
    if (!(0, _type.isString)(this.option('position'))) return;
    var verticalPosition = this.option('position').split(' ')[0];
    var horizontalPosition = this.option('position').split(' ')[1];
    this.option('position', (0, _extend.extend)({}, POSITION_ALIASES[verticalPosition]));

    switch (horizontalPosition) {
      case 'center':
      case 'left':
      case 'right':
        this.option('position').at += ' ' + horizontalPosition;
        this.option('position').my += ' ' + horizontalPosition;
        break;
    }
  },
  _show: function _show() {
    if (visibleToastInstance && visibleToastInstance !== this) {
      clearTimeout(visibleToastInstance._hideTimeout);
      visibleToastInstance.hide();
    }

    visibleToastInstance = this;
    return this.callBase.apply(this, arguments).done(function () {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = setTimeout(this.hide.bind(this), this.option('displayTime'));
    }.bind(this));
  },
  _hide: function _hide() {
    visibleToastInstance = null;
    return this.callBase.apply(this, arguments);
  },
  _overlayStack: function _overlayStack() {
    return TOAST_STACK;
  },
  _zIndexInitValue: function _zIndexInitValue() {
    return this.callBase() + FIRST_Z_INDEX_OFFSET;
  },
  _dispose: function _dispose() {
    clearTimeout(this._hideTimeout);
    visibleToastInstance = null;
    this.callBase();
  },
  _optionChanged: function _optionChanged(args) {
    switch (args.name) {
      case 'type':
        this.$content().removeClass(TOAST_CLASS_PREFIX + args.previousValue);
        this.$content().addClass(TOAST_CLASS_PREFIX + String(args.value).toLowerCase());
        break;

      case 'message':
        if (this._message) {
          this._message.text(args.value);
        }

        break;

      case 'closeOnSwipe':
        this._toggleCloseEvents('Swipe');

        break;

      case 'closeOnClick':
        this._toggleCloseEvents('Click');

        break;

      case 'displayTime':
      case 'position':
        break;

      default:
        this.callBase(args);
    }
  }
});

(0, _component_registrator.default)(WIDGET_NAME, Toast);
var _default = Toast;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
