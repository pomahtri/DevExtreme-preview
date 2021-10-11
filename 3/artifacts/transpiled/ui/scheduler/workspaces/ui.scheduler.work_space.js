"use strict";

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../../core/renderer"));

var _dom_adapter = _interopRequireDefault(require("../../../core/dom_adapter"));

var _events_engine = _interopRequireDefault(require("../../../events/core/events_engine"));

var _date = _interopRequireDefault(require("../../../core/utils/date"));

var _window = require("../../../core/utils/window");

var _element = require("../../../core/element");

var _extend = require("../../../core/utils/extend");

var _position = require("../../../core/utils/position");

var _message = _interopRequireDefault(require("../../../localization/message"));

var _date2 = _interopRequireDefault(require("../../../localization/date"));

var _common = require("../../../core/utils/common");

var _type = require("../../../core/utils/type");

var _index = require("../../../events/utils/index");

var _pointer = _interopRequireDefault(require("../../../events/pointer"));

var _ui = _interopRequireDefault(require("../../widget/ui.errors"));

var _click = require("../../../events/click");

var _contextmenu = require("../../../events/contextmenu");

var _drag = require("../../../events/drag");

var _ui2 = _interopRequireDefault(require("../../scroll_view/ui.scrollable"));

var _uiSchedulerWork_spaceGroupedStrategy = _interopRequireDefault(require("./ui.scheduler.work_space.grouped.strategy.horizontal"));

var _uiSchedulerWork_spaceGroupedStrategy2 = _interopRequireDefault(require("./ui.scheduler.work_space.grouped.strategy.vertical"));

var _table_creator = _interopRequireDefault(require("../table_creator"));

var _uiSchedulerCurrent_time_shader = _interopRequireDefault(require("../shaders/ui.scheduler.current_time_shader.vertical"));

var _appointmentDragBehavior = _interopRequireDefault(require("../appointmentDragBehavior"));

var _constants = require("../constants");

var _classes = require("../classes");

var _utils = _interopRequireDefault(require("../utils.timeZone"));

var _widgetObserver = _interopRequireDefault(require("../base/widgetObserver"));

var _translator = require("../../../animation/translator");

var _uiScheduler = _interopRequireDefault(require("./ui.scheduler.virtual_scrolling"));

var _view_data_provider = _interopRequireDefault(require("./view_model/view_data_provider"));

var _layout = _interopRequireDefault(require("../../../renovation/ui/scheduler/workspaces/base/date_table/layout.j"));

var _layout2 = _interopRequireDefault(require("../../../renovation/ui/scheduler/workspaces/base/date_table/all_day_panel/layout.j"));

var _title = _interopRequireDefault(require("../../../renovation/ui/scheduler/workspaces/base/date_table/all_day_panel/title.j"));

var _layout3 = _interopRequireDefault(require("../../../renovation/ui/scheduler/workspaces/base/time_panel/layout.j"));

var _group_panel = _interopRequireDefault(require("../../../renovation/ui/scheduler/workspaces/base/group_panel/group_panel.j"));

var _layout4 = _interopRequireDefault(require("../../../renovation/ui/scheduler/workspaces/base/header_panel/layout.j"));

var _cells_selection_state = _interopRequireDefault(require("./cells_selection_state"));

var _cache = require("./cache");

var _cells_selection_controller = require("./cells_selection_controller");

var _instanceFactory = require("../instanceFactory");

var _base = require("./utils/base");

var _week = require("./utils/week");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var tableCreator = _table_creator.default.tableCreator;
var abstract = _widgetObserver.default.abstract;
var toMs = _date.default.dateToMilliseconds;
var COMPONENT_CLASS = 'dx-scheduler-work-space';
var GROUPED_WORKSPACE_CLASS = 'dx-scheduler-work-space-grouped';
var VERTICAL_GROUPED_WORKSPACE_CLASS = 'dx-scheduler-work-space-vertical-grouped';
var WORKSPACE_VERTICAL_GROUP_TABLE_CLASS = 'dx-scheduler-work-space-vertical-group-table';
var WORKSPACE_WITH_BOTH_SCROLLS_CLASS = 'dx-scheduler-work-space-both-scrollbar';
var WORKSPACE_WITH_COUNT_CLASS = 'dx-scheduler-work-space-count';
var WORKSPACE_WITH_GROUP_BY_DATE_CLASS = 'dx-scheduler-work-space-group-by-date';
var WORKSPACE_WITH_ODD_CELLS_CLASS = 'dx-scheduler-work-space-odd-cells';
var TIME_PANEL_CELL_CLASS = 'dx-scheduler-time-panel-cell';
var TIME_PANEL_ROW_CLASS = 'dx-scheduler-time-panel-row';
var ALL_DAY_PANEL_CLASS = 'dx-scheduler-all-day-panel';
var ALL_DAY_TABLE_CLASS = 'dx-scheduler-all-day-table';
var ALL_DAY_CONTAINER_CLASS = 'dx-scheduler-all-day-appointments';
var ALL_DAY_TITLE_CLASS = 'dx-scheduler-all-day-title';
var ALL_DAY_TITLE_HIDDEN_CLASS = 'dx-scheduler-all-day-title-hidden';
var ALL_DAY_TABLE_CELL_CLASS = 'dx-scheduler-all-day-table-cell';
var ALL_DAY_TABLE_ROW_CLASS = 'dx-scheduler-all-day-table-row';
var WORKSPACE_WITH_ALL_DAY_CLASS = 'dx-scheduler-work-space-all-day';
var WORKSPACE_WITH_COLLAPSED_ALL_DAY_CLASS = 'dx-scheduler-work-space-all-day-collapsed';
var WORKSPACE_WITH_MOUSE_SELECTION_CLASS = 'dx-scheduler-work-space-mouse-selection';
var HORIZONTAL_SIZES_CLASS = 'dx-scheduler-cell-sizes-horizontal';
var VERTICAL_SIZES_CLASS = 'dx-scheduler-cell-sizes-vertical';
var HEADER_PANEL_CLASS = 'dx-scheduler-header-panel';
var HEADER_PANEL_CELL_CLASS = 'dx-scheduler-header-panel-cell';
var HEADER_ROW_CLASS = 'dx-scheduler-header-row';
var GROUP_HEADER_CLASS = 'dx-scheduler-group-header';
var DATE_TABLE_CELL_CLASS = 'dx-scheduler-date-table-cell';
var DATE_TABLE_FOCUSED_CELL_CLASS = 'dx-scheduler-focused-cell';
var VIRTUAL_ROW_CLASS = 'dx-scheduler-virtual-row';
var DATE_TABLE_DROPPABLE_CELL_CLASS = 'dx-scheduler-date-table-droppable-cell';
var SCHEDULER_HEADER_SCROLLABLE_CLASS = 'dx-scheduler-header-scrollable';
var SCHEDULER_SIDEBAR_SCROLLABLE_CLASS = 'dx-scheduler-sidebar-scrollable';
var SCHEDULER_DATE_TABLE_SCROLLABLE_CLASS = 'dx-scheduler-date-table-scrollable';
var SCHEDULER_WORKSPACE_DXPOINTERDOWN_EVENT_NAME = (0, _index.addNamespace)(_pointer.default.down, 'dxSchedulerWorkSpace');
var DragEventNames = {
  ENTER: (0, _index.addNamespace)(_drag.enter, 'dxSchedulerDateTable'),
  DROP: (0, _index.addNamespace)(_drag.drop, 'dxSchedulerDateTable'),
  LEAVE: (0, _index.addNamespace)(_drag.leave, 'dxSchedulerDateTable')
};
var SCHEDULER_CELL_DXCLICK_EVENT_NAME = (0, _index.addNamespace)(_click.name, 'dxSchedulerDateTable');
var SCHEDULER_CELL_DXPOINTERDOWN_EVENT_NAME = (0, _index.addNamespace)(_pointer.default.down, 'dxSchedulerDateTable');
var SCHEDULER_CELL_DXPOINTERUP_EVENT_NAME = (0, _index.addNamespace)(_pointer.default.up, 'dxSchedulerDateTable');
var SCHEDULER_CELL_DXPOINTERMOVE_EVENT_NAME = (0, _index.addNamespace)(_pointer.default.move, 'dxSchedulerDateTable');
var CELL_DATA = 'dxCellData';
var DATE_TABLE_MIN_CELL_WIDTH = 75;
var DAY_MS = toMs('day');
var HOUR_MS = toMs('hour');
var DRAG_AND_DROP_SELECTOR = ".".concat(_classes.DATE_TABLE_CLASS, " td, .").concat(ALL_DAY_TABLE_CLASS, " td");
var CELL_SELECTOR = ".".concat(DATE_TABLE_CELL_CLASS, ", .").concat(ALL_DAY_TABLE_CELL_CLASS);

var ScrollSemaphore = /*#__PURE__*/function () {
  function ScrollSemaphore() {
    this.counter = 0;
  }

  var _proto = ScrollSemaphore.prototype;

  _proto.isFree = function isFree() {
    return this.counter === 0;
  };

  _proto.take = function take() {
    this.counter++;
  };

  _proto.release = function release() {
    this.counter--;

    if (this.counter < 0) {
      this.counter = 0;
    }
  };

  return ScrollSemaphore;
}();

var formatWeekday = function formatWeekday(date) {
  return _date2.default.getDayNames('abbreviated')[date.getDay()];
};

var SchedulerWorkSpace = /*#__PURE__*/function (_WidgetObserver) {
  _inheritsLoose(SchedulerWorkSpace, _WidgetObserver);

  function SchedulerWorkSpace() {
    return _WidgetObserver.apply(this, arguments) || this;
  }

  var _proto2 = SchedulerWorkSpace.prototype;

  _proto2._supportedKeys = function _supportedKeys() {
    var _this2 = this;

    var clickHandler = function clickHandler(e) {
      var _this = this;

      e.preventDefault();
      e.stopPropagation();
      var selectedCells = this.cellsSelectionState.getSelectedCells();

      if (selectedCells !== null && selectedCells !== void 0 && selectedCells.length) {
        var selectedCellsElement = selectedCells.map(function (cellData) {
          return _this._getCellByData(cellData);
        }).filter(function (cell) {
          return !!cell;
        });
        e.target = selectedCellsElement;
        this._showPopup = true;

        this._cellClickAction({
          event: e,
          cellElement: (0, _renderer.default)(selectedCellsElement),
          cellData: selectedCells[0]
        });
      }
    };

    var onArrowPressed = function onArrowPressed(e, key) {
      var _this2$cellsSelection;

      e.preventDefault();
      e.stopPropagation();
      var focusedCellData = (_this2$cellsSelection = _this2.cellsSelectionState.focusedCell) === null || _this2$cellsSelection === void 0 ? void 0 : _this2$cellsSelection.cellData;

      if (focusedCellData) {
        var isAllDayPanelCell = focusedCellData.allDay && !_this2._isVerticalGroupedWorkSpace();
        var isMultiSelection = e.shiftKey;

        var isMultiSelectionAllowed = _this2.option('allowMultipleCellSelection');

        var isRTL = _this2._isRTL();

        var groupCount = _this2._getGroupCount();

        var isGroupedByDate = _this2.isGroupedByDate();

        var isHorizontalGrouping = _this2._isHorizontalGroupedWorkSpace();

        var focusedCellPosition = _this2.viewDataProvider.findCellPositionInMap(_extends({}, focusedCellData, {
          isAllDay: focusedCellData.allDay
        }));

        var edgeIndices = isHorizontalGrouping && isMultiSelection && !isGroupedByDate ? _this2.viewDataProvider.getGroupEdgeIndices(focusedCellData.groupIndex, isAllDayPanelCell) : _this2.viewDataProvider.getViewEdgeIndices(isAllDayPanelCell);

        var nextCellData = _this2.cellsSelectionController.handleArrowClick({
          focusedCellPosition: focusedCellPosition,
          edgeIndices: edgeIndices,
          isRTL: isRTL,
          isGroupedByDate: isGroupedByDate,
          groupCount: groupCount,
          isMultiSelection: isMultiSelection,
          isMultiSelectionAllowed: isMultiSelectionAllowed,
          isDateAndTimeView: _this2.isDateAndTimeView,
          key: key,
          getCellDataByPosition: _this2.viewDataProvider.getCellData.bind(_this2.viewDataProvider),
          isAllDayPanelCell: isAllDayPanelCell,
          focusedCellData: focusedCellData
        });

        _this2._processNextSelectedCell(nextCellData, focusedCellData, isMultiSelection && isMultiSelectionAllowed);
      }
    };

    return (0, _extend.extend)(_WidgetObserver.prototype._supportedKeys.call(this), {
      enter: clickHandler,
      space: clickHandler,
      downArrow: function downArrow(e) {
        onArrowPressed(e, 'down');
      },
      upArrow: function upArrow(e) {
        onArrowPressed(e, 'up');
      },
      rightArrow: function rightArrow(e) {
        onArrowPressed(e, 'right');
      },
      leftArrow: function leftArrow(e) {
        onArrowPressed(e, 'left');
      }
    });
  };

  _proto2._dispose = function _dispose() {
    _WidgetObserver.prototype._dispose.call(this);

    this.virtualScrollingDispatcher.dispose();
  };

  _proto2._isRTL = function _isRTL() {
    return this.option('rtlEnabled');
  };

  _proto2._moveToCell = function _moveToCell($cell, isMultiSelection) {
    if (!(0, _type.isDefined)($cell) || !$cell.length) {
      return undefined;
    }

    var isMultiSelectionAllowed = this.option('allowMultipleCellSelection');

    var currentCellData = this._getFullCellData($cell);

    var focusedCellData = this.cellsSelectionState.focusedCell.cellData;
    var nextFocusedCellData = this.cellsSelectionController.moveToCell({
      isMultiSelection: isMultiSelection,
      isMultiSelectionAllowed: isMultiSelectionAllowed,
      currentCellData: currentCellData,
      focusedCellData: focusedCellData,
      isVirtualCell: $cell.hasClass(_classes.VIRTUAL_CELL_CLASS)
    });

    this._processNextSelectedCell(nextFocusedCellData, focusedCellData, isMultiSelectionAllowed && isMultiSelection);
  };

  _proto2._processNextSelectedCell = function _processNextSelectedCell(nextCellData, focusedCellData, isMultiSelection) {
    var nextCellPosition = this.viewDataProvider.findCellPositionInMap({
      startDate: nextCellData.startDate,
      groupIndex: nextCellData.groupIndex,
      isAllDay: nextCellData.allDay,
      index: nextCellData.index
    });

    if (!this.viewDataProvider.isSameCell(focusedCellData, nextCellData)) {
      var $cell = nextCellData.allDay && !this._isVerticalGroupedWorkSpace() ? this._dom_getAllDayPanelCell(nextCellPosition.columnIndex) : this._dom_getDateCell(nextCellPosition);
      var isNextCellAllDay = nextCellData.allDay;

      this._setSelectedCellsStateAndUpdateSelection(isNextCellAllDay, nextCellPosition, isMultiSelection, $cell);

      this._dateTableScrollable.scrollToElement($cell);
    }
  };

  _proto2._setSelectedCellsStateAndUpdateSelection = function _setSelectedCellsStateAndUpdateSelection(isAllDay, cellPosition, isMultiSelection, $nextFocusedCell) {
    var nextCellCoordinates = {
      rowIndex: cellPosition.rowIndex,
      columnIndex: cellPosition.columnIndex,
      allDay: isAllDay
    };
    this.cellsSelectionState.setFocusedCell(nextCellCoordinates.rowIndex, nextCellCoordinates.columnIndex, isAllDay);

    if (isMultiSelection) {
      this.cellsSelectionState.setSelectedCells(nextCellCoordinates);
    } else {
      this.cellsSelectionState.setSelectedCells(nextCellCoordinates, nextCellCoordinates);
    }

    this.updateCellsSelection();

    this._updateSelectedCellDataOption(this.cellsSelectionState.getSelectedCells(), $nextFocusedCell);
  };

  _proto2._hasAllDayClass = function _hasAllDayClass($cell) {
    return $cell.hasClass(ALL_DAY_TABLE_CELL_CLASS);
  };

  _proto2._focusInHandler = function _focusInHandler(e) {
    if ((0, _renderer.default)(e.target).is(this._focusTarget()) && this._isCellClick !== false) {
      delete this._isCellClick;
      delete this._contextMenuHandled;

      _WidgetObserver.prototype._focusInHandler.apply(this, arguments);

      this.cellsSelectionState.restoreSelectedAndFocusedCells();

      if (!this.cellsSelectionState.focusedCell) {
        var cellCoordinates = {
          columnIndex: 0,
          rowIndex: 0,
          allDay: this._isVerticalGroupedWorkSpace() && this.isAllDayPanelVisible
        };
        this.cellsSelectionState.setFocusedCell(cellCoordinates.rowIndex, cellCoordinates.columnIndex, cellCoordinates.allDay);
        this.cellsSelectionState.setSelectedCells(cellCoordinates, cellCoordinates);
      }

      this.updateCellsSelection();

      this._updateSelectedCellDataOption(this.cellsSelectionState.getSelectedCells());
    }
  };

  _proto2._focusOutHandler = function _focusOutHandler() {
    _WidgetObserver.prototype._focusOutHandler.apply(this, arguments);

    if (!this._contextMenuHandled) {
      this.cellsSelectionState.releaseSelectedAndFocusedCells();
      this.viewDataProvider.updateViewData(this.generateRenderOptions());
      this.updateCellsSelection();
    }
  };

  _proto2._focusTarget = function _focusTarget() {
    return this.$element();
  };

  _proto2._getDefaultOptions = function _getDefaultOptions() {
    return (0, _extend.extend)(_WidgetObserver.prototype._getDefaultOptions.call(this), {
      currentDate: new Date(),
      intervalCount: 1,
      startDate: null,
      firstDayOfWeek: undefined,
      startDayHour: 0,
      endDayHour: 24,
      hoursInterval: 0.5,
      activeStateEnabled: true,
      hoverStateEnabled: true,
      groups: [],
      showAllDayPanel: true,
      allDayExpanded: false,
      onCellClick: null,
      crossScrollingEnabled: false,
      dataCellTemplate: null,
      timeCellTemplate: null,
      resourceCellTemplate: null,
      dateCellTemplate: null,
      allowMultipleCellSelection: true,
      indicatorTime: new Date(),
      indicatorUpdateInterval: 5 * toMs('minute'),
      shadeUntilCurrentTime: true,
      groupOrientation: 'horizontal',
      selectedCellData: [],
      groupByDate: false,
      scrolling: {
        mode: 'standard'
      },
      renovateRender: true,
      height: undefined,
      draggingMode: 'outlook'
    });
  };

  _proto2._optionChanged = function _optionChanged(args) {
    switch (args.name) {
      case 'startDayHour':
      case 'endDayHour':
        this.invoke('validateDayHours');

        this._cleanWorkSpace();

        break;

      case 'dateCellTemplate':
      case 'resourceCellTemplate':
      case 'dataCellTemplate':
      case 'timeCellTemplate':
      case 'hoursInterval':
      case 'firstDayOfWeek':
      case 'currentDate':
      case 'startDate':
        this._cleanWorkSpace();

        break;

      case 'groups':
        this._cleanView();

        this._removeAllDayElements();

        this._initGrouping();

        this.repaint();
        break;

      case 'groupOrientation':
        this._initGroupedStrategy();

        this._createAllDayPanelElements();

        this._removeAllDayElements();

        this._cleanWorkSpace();

        this._toggleGroupByDateClass();

        break;

      case 'showAllDayPanel':
        if (this._isVerticalGroupedWorkSpace()) {
          this._cleanView();

          this._removeAllDayElements();

          this._initGrouping();

          this.repaint();
        } else {
          if (!this.isRenovatedRender()) {
            this._toggleAllDayVisibility(true);
          } else {
            this.renderWorkSpace();
          }
        }

        break;

      case 'allDayExpanded':
        this._changeAllDayVisibility();

        this._attachTablesEvents();

        this.headerPanelOffsetRecalculate();

        this._updateScrollable();

        break;

      case 'onSelectionChanged':
        this._createSelectionChangedAction();

        break;

      case 'onCellClick':
        this._createCellClickAction();

        break;

      case 'onCellContextMenu':
        this._attachContextMenuEvent();

        break;

      case 'intervalCount':
        this._cleanWorkSpace();

        this._toggleWorkSpaceCountClass();

        this._toggleFixedScrollableClass();

        break;

      case 'groupByDate':
        this._cleanWorkSpace();

        this._toggleGroupByDateClass();

        break;

      case 'crossScrollingEnabled':
        this._toggleHorizontalScrollClass();

        this._dateTableScrollable.option(this._dateTableScrollableConfig());

        break;

      case 'width':
        _WidgetObserver.prototype._optionChanged.call(this, args);

        this._dimensionChanged();

        break;

      case 'allowMultipleCellSelection':
        break;

      case 'selectedCellData':
        break;

      case 'scrolling':
        if (this._isVirtualModeOn()) {
          if (!this.option('renovateRender')) {
            this.option('renovateRender', true);
          } else {
            this.repaint();
          }
        } else {
          this.option('renovateRender', false);
        }

        break;

      case 'renovateRender':
        this.repaint();
        break;

      default:
        _WidgetObserver.prototype._optionChanged.call(this, args);

    }
  };

  _proto2._cleanWorkSpace = function _cleanWorkSpace() {
    this._cleanView();

    this._toggleGroupedClass();

    this._toggleWorkSpaceWithOddCells();

    this.virtualScrollingDispatcher.updateDimensions(true);

    this._renderView();

    this.option('crossScrollingEnabled') && this._setTableSizes();
    this.cache.clear();
  };

  _proto2._init = function _init() {
    this._headerSemaphore = new ScrollSemaphore();
    this._sideBarSemaphore = new ScrollSemaphore();
    this._dataTableSemaphore = new ScrollSemaphore();
    this._viewDataProvider = null;
    this._cellsSelectionState = null;
    this._activeStateUnit = CELL_SELECTOR;
    this._maxAllowedVerticalPosition = [];
    this._maxAllowedPosition = [];

    _WidgetObserver.prototype._init.call(this);

    this._initGrouping();

    this._toggleHorizontalScrollClass();

    this._toggleWorkSpaceCountClass();

    this._toggleGroupByDateClass();

    this._toggleWorkSpaceWithOddCells();

    this.$element().addClass(COMPONENT_CLASS).addClass(this._getElementClass());
  };

  _proto2._initGrouping = function _initGrouping() {
    this._initGroupedStrategy();

    this._toggleGroupingDirectionClass();

    this._toggleGroupByDateClass();
  };

  _proto2._initGroupedStrategy = function _initGroupedStrategy() {
    var strategyName = this.option('groups').length ? this.option('groupOrientation') : this._getDefaultGroupStrategy();
    var Strategy = strategyName === 'vertical' ? _uiSchedulerWork_spaceGroupedStrategy2.default : _uiSchedulerWork_spaceGroupedStrategy.default;
    this._groupedStrategy = new Strategy(this);
  };

  _proto2._getDefaultGroupStrategy = function _getDefaultGroupStrategy() {
    return 'horizontal';
  };

  _proto2._isVerticalGroupedWorkSpace = function _isVerticalGroupedWorkSpace() {
    return !!this.option('groups').length && this.option('groupOrientation') === 'vertical';
  };

  _proto2._isHorizontalGroupedWorkSpace = function _isHorizontalGroupedWorkSpace() {
    return !!this.option('groups').length && this.option('groupOrientation') === 'horizontal';
  };

  _proto2._toggleHorizontalScrollClass = function _toggleHorizontalScrollClass() {
    this.$element().toggleClass(WORKSPACE_WITH_BOTH_SCROLLS_CLASS, this.option('crossScrollingEnabled'));
  };

  _proto2._toggleGroupByDateClass = function _toggleGroupByDateClass() {
    this.$element().toggleClass(WORKSPACE_WITH_GROUP_BY_DATE_CLASS, this.isGroupedByDate());
  };

  _proto2._toggleWorkSpaceCountClass = function _toggleWorkSpaceCountClass() {
    this.$element().toggleClass(WORKSPACE_WITH_COUNT_CLASS, this._isWorkSpaceWithCount());
  };

  _proto2._isWorkSpaceWithCount = function _isWorkSpaceWithCount() {
    return this.option('intervalCount') > 1;
  };

  _proto2._toggleWorkSpaceWithOddCells = function _toggleWorkSpaceWithOddCells() {
    this.$element().toggleClass(WORKSPACE_WITH_ODD_CELLS_CLASS, this._isWorkspaceWithOddCells());
  };

  _proto2._isWorkspaceWithOddCells = function _isWorkspaceWithOddCells() {
    return this.option('hoursInterval') === 0.5 && !this.isVirtualScrolling();
  };

  _proto2._toggleGroupingDirectionClass = function _toggleGroupingDirectionClass() {
    this.$element().toggleClass(VERTICAL_GROUPED_WORKSPACE_CLASS, this._isVerticalGroupedWorkSpace());
  };

  _proto2._getRealGroupOrientation = function _getRealGroupOrientation() {
    return this._isVerticalGroupedWorkSpace() ? 'vertical' : 'horizontal';
  };

  _proto2._getDateTableCellClass = function _getDateTableCellClass(rowIndex, columnIndex) {
    var cellClass = DATE_TABLE_CELL_CLASS + ' ' + HORIZONTAL_SIZES_CLASS + ' ' + VERTICAL_SIZES_CLASS;
    return this._groupedStrategy.addAdditionalGroupCellClasses(cellClass, columnIndex + 1, rowIndex, columnIndex);
  };

  _proto2._getGroupHeaderClass = function _getGroupHeaderClass(i) {
    var cellClass = GROUP_HEADER_CLASS;
    return this._groupedStrategy.addAdditionalGroupCellClasses(cellClass, i + 1);
  };

  _proto2._initWorkSpaceUnits = function _initWorkSpaceUnits() {
    this._$headerPanel = (0, _renderer.default)('<table>');
    this._$thead = (0, _renderer.default)('<thead>').appendTo(this._$headerPanel);
    this._$fixedContainer = (0, _renderer.default)('<div>').addClass(_classes.FIXED_CONTAINER_CLASS);
    this._$allDayContainer = (0, _renderer.default)('<div>').addClass(ALL_DAY_CONTAINER_CLASS);

    this._initAllDayPanelElements();

    if (this.isRenovatedRender()) {
      this.createRAllDayPanelElements();
    } else {
      this._createAllDayPanelElements();
    }

    this._$timePanel = (0, _renderer.default)('<table>').addClass(_classes.TIME_PANEL_CLASS);
    this._$dateTable = (0, _renderer.default)('<table>');
    this._$groupTable = (0, _renderer.default)('<div>').addClass(WORKSPACE_VERTICAL_GROUP_TABLE_CLASS);
  };

  _proto2._initAllDayPanelElements = function _initAllDayPanelElements() {
    this._allDayTitles = [];
    this._allDayTables = [];
    this._allDayPanels = [];
  };

  _proto2.createRAllDayPanelElements = function createRAllDayPanelElements() {
    this._$allDayPanel = (0, _renderer.default)('<div>');
    this._$allDayTitle = (0, _renderer.default)('<div>').appendTo(this.$element());
  };

  _proto2._createAllDayPanelElements = function _createAllDayPanelElements() {
    var groupCount = this._getGroupCount();

    if (this._isVerticalGroupedWorkSpace() && groupCount !== 0) {
      for (var i = 0; i < groupCount; i++) {
        var $allDayTitle = (0, _renderer.default)('<div>').addClass(ALL_DAY_TITLE_CLASS).text(_message.default.format('dxScheduler-allDay'));

        this._allDayTitles.push($allDayTitle);

        this._$allDayTable = (0, _renderer.default)('<table>');

        this._allDayTables.push(this._$allDayTable);

        this._$allDayPanel = (0, _renderer.default)('<div>').addClass(ALL_DAY_PANEL_CLASS).append(this._$allDayTable);

        this._allDayPanels.push(this._$allDayPanel);
      }
    } else {
      this._$allDayTitle = (0, _renderer.default)('<div>').addClass(ALL_DAY_TITLE_CLASS).text(_message.default.format('dxScheduler-allDay')).appendTo(this.$element());
      this._$allDayTable = (0, _renderer.default)('<table>');
      this._$allDayPanel = (0, _renderer.default)('<div>').addClass(ALL_DAY_PANEL_CLASS).append(this._$allDayTable);
    }
  };

  _proto2._initDateTableScrollable = function _initDateTableScrollable() {
    var $dateTableScrollable = (0, _renderer.default)('<div>').addClass(SCHEDULER_DATE_TABLE_SCROLLABLE_CLASS);
    this._dateTableScrollable = this._createComponent($dateTableScrollable, _ui2.default, this._dateTableScrollableConfig());
  };

  _proto2._dateTableScrollableConfig = function _dateTableScrollableConfig() {
    var config = {
      useKeyboard: false,
      bounceEnabled: false,
      updateManually: true
    };

    if (this._needCreateCrossScrolling()) {
      config = (0, _extend.extend)(config, this._createCrossScrollingConfig());
    }

    return config;
  };

  _proto2._createCrossScrollingConfig = function _createCrossScrollingConfig() {
    var _this3 = this;

    var config = {};
    config.direction = 'both';

    config.onScroll = function (e) {
      _this3._dataTableSemaphore.take();

      _this3._sideBarSemaphore.isFree() && _this3._sidebarScrollable && _this3._sidebarScrollable.scrollTo({
        top: e.scrollOffset.top
      });
      _this3._headerSemaphore.isFree() && _this3._headerScrollable && _this3._headerScrollable.scrollTo({
        left: e.scrollOffset.left
      });

      _this3._dataTableSemaphore.release();
    };

    config.onEnd = function () {
      _this3.notifyObserver('updateResizableArea', {});
    };

    return config;
  };

  _proto2._createWorkSpaceElements = function _createWorkSpaceElements() {
    if (this.option('crossScrollingEnabled')) {
      this._createWorkSpaceScrollableElements();
    } else {
      this._createWorkSpaceStaticElements();
    }
  };

  _proto2._createWorkSpaceStaticElements = function _createWorkSpaceStaticElements() {
    if (this._isVerticalGroupedWorkSpace()) {
      this._dateTableScrollable.$content().append(this._$allDayContainer, this._$groupTable, this._$timePanel, this._$dateTable);

      this.$element().append(this._$fixedContainer, this._$headerPanel, this._dateTableScrollable.$element());
    } else {
      this._dateTableScrollable.$content().append(this._$timePanel, this._$dateTable);

      this.$element().append(this._$fixedContainer, this._$headerPanel, this._$allDayContainer, this._$allDayPanel, this._dateTableScrollable.$element());
    }
  };

  _proto2._createWorkSpaceScrollableElements = function _createWorkSpaceScrollableElements() {
    this.$element().append(this._$fixedContainer);

    this._createHeaderScrollable();

    this._createSidebarScrollable();

    this.$element().append(this._dateTableScrollable.$element());

    this._headerScrollable.$content().append(this._$headerPanel);

    this._dateTableScrollable.$content().append(this._$dateTable);

    if (this._isVerticalGroupedWorkSpace()) {
      this._dateTableScrollable.$content().prepend(this._$allDayContainer);

      this._sidebarScrollable.$content().append(this._$groupTable, this._$timePanel);
    } else {
      this._headerScrollable.$content().append(this._$allDayContainer, this._$allDayPanel);
    }

    this._sidebarScrollable.$content().append(this._$timePanel);
  };

  _proto2._createHeaderScrollable = function _createHeaderScrollable() {
    var $headerScrollable = (0, _renderer.default)('<div>').addClass(SCHEDULER_HEADER_SCROLLABLE_CLASS).appendTo(this.$element());
    this._headerScrollable = this._createComponent($headerScrollable, _ui2.default, this._headerScrollableConfig());
  };

  _proto2._headerScrollableConfig = function _headerScrollableConfig() {
    var _this4 = this;

    var config = {
      useKeyboard: false,
      showScrollbar: false,
      direction: 'horizontal',
      useNative: false,
      updateManually: true,
      bounceEnabled: false,
      onScroll: function onScroll(e) {
        _this4._headerSemaphore.take();

        _this4._dataTableSemaphore.isFree() && _this4._dateTableScrollable.scrollTo({
          left: e.scrollOffset.left
        });

        _this4._headerSemaphore.release();
      }
    };
    return config;
  };

  _proto2._createSidebarScrollable = function _createSidebarScrollable() {
    var _this5 = this;

    var $timePanelScrollable = (0, _renderer.default)('<div>').addClass(SCHEDULER_SIDEBAR_SCROLLABLE_CLASS).appendTo(this.$element());
    this._sidebarScrollable = this._createComponent($timePanelScrollable, _ui2.default, {
      useKeyboard: false,
      showScrollbar: false,
      direction: 'vertical',
      useNative: false,
      updateManually: true,
      bounceEnabled: false,
      onScroll: function onScroll(e) {
        _this5._sideBarSemaphore.take();

        _this5._dataTableSemaphore.isFree() && _this5._dateTableScrollable.scrollTo({
          top: e.scrollOffset.top
        });

        _this5._sideBarSemaphore.release();
      }
    });
  };

  _proto2._visibilityChanged = function _visibilityChanged(visible) {
    this.cache.clear();

    if (visible) {
      this._updateGroupTableHeight();
    }

    if (visible && this._needCreateCrossScrolling()) {
      this._setTableSizes();
    }
  };

  _proto2._attachTableClasses = function _attachTableClasses() {
    this._addTableClass(this._$dateTable, _classes.DATE_TABLE_CLASS);

    if (this._isVerticalGroupedWorkSpace()) {
      var groupCount = this._getGroupCount();

      for (var i = 0; i < groupCount; i++) {
        this._addTableClass(this._allDayTables[i], ALL_DAY_TABLE_CLASS);
      }
    } else {
      this._addTableClass(this._$allDayTable, ALL_DAY_TABLE_CLASS);
    }
  };

  _proto2._attachHeaderTableClasses = function _attachHeaderTableClasses() {
    this._addTableClass(this._$headerPanel, HEADER_PANEL_CLASS);
  };

  _proto2._addTableClass = function _addTableClass($el, className) {
    $el && !$el.hasClass(className) && $el.addClass(className);
  };

  _proto2._setTableSizes = function _setTableSizes() {
    this.cache.clear();

    this._attachTableClasses();

    var cellWidth = this.getCellWidth();

    if (cellWidth < this.getCellMinWidth()) {
      cellWidth = this.getCellMinWidth();
    }

    var minWidth = this.getWorkSpaceMinWidth();

    var groupCount = this._getGroupCount();

    var totalCellCount = this._getTotalCellCount(groupCount);

    var width = cellWidth * totalCellCount;

    if (width < minWidth) {
      width = minWidth;
    }

    this._$headerPanel.width(width);

    this._$dateTable.width(width);

    this._$allDayTable && this._$allDayTable.width(width);

    this._attachHeaderTableClasses();

    this._updateGroupTableHeight();
  };

  _proto2.getWorkSpaceMinWidth = function getWorkSpaceMinWidth() {
    return this._groupedStrategy.getWorkSpaceMinWidth();
  };

  _proto2._dimensionChanged = function _dimensionChanged() {
    if (this.option('crossScrollingEnabled')) {
      this._setTableSizes();
    }

    this.headerPanelOffsetRecalculate();
    this.cache.clear();

    this._cleanAllowedPositions();
  };

  _proto2._needCreateCrossScrolling = function _needCreateCrossScrolling() {
    return this.option('crossScrollingEnabled');
  };

  _proto2._getElementClass = function _getElementClass() {
    return (0, _common.noop)();
  };

  _proto2._getRowCount = function _getRowCount() {
    return (0, _common.noop)();
  };

  _proto2._getRowCountWithAllDayRows = function _getRowCountWithAllDayRows() {
    var allDayRowCount = this._isShowAllDayPanel() ? 1 : 0;
    return this._getRowCount() + allDayRowCount;
  };

  _proto2._getCellCount = function _getCellCount() {
    return (0, _common.noop)();
  };

  _proto2._initMarkup = function _initMarkup() {
    this.cache.clear();

    this._initWorkSpaceUnits();

    this._initDateTableScrollable();

    this._createWorkSpaceElements();

    this._initVirtualScrolling();

    _WidgetObserver.prototype._initMarkup.call(this);

    if (!this.option('crossScrollingEnabled')) {
      this._attachTableClasses();

      this._attachHeaderTableClasses();
    }

    this._toggleGroupedClass();

    this._toggleFixedScrollableClass();

    this._renderView();

    this._attachEvents();
  };

  _proto2.isRenovatedRender = function isRenovatedRender() {
    return this.renovatedRenderSupported() && this.option('renovateRender');
  };

  _proto2._isVirtualModeOn = function _isVirtualModeOn() {
    return this.option('scrolling.mode') === 'virtual';
  };

  _proto2.isVirtualScrolling = function isVirtualScrolling() {
    return this.isRenovatedRender() && this._isVirtualModeOn();
  };

  _proto2._initVirtualScrolling = function _initVirtualScrolling() {
    if (this.virtualScrollingDispatcher) {
      this.virtualScrollingDispatcher.dispose();
      this.virtualScrollingDispatcher = null;
    }

    this.virtualScrollingDispatcher = new _uiScheduler.default(this);
  };

  _proto2._render = function _render() {
    _WidgetObserver.prototype._render.call(this);

    this._renderDateTimeIndication();

    this._setIndicationUpdateInterval();
  };

  _proto2._toggleGroupedClass = function _toggleGroupedClass() {
    this.$element().toggleClass(GROUPED_WORKSPACE_CLASS, this._getGroupCount() > 0);
  };

  _proto2._toggleFixedScrollableClass = function _toggleFixedScrollableClass() {
    return (0, _common.noop)();
  };

  _proto2._setVisibilityDates = function _setVisibilityDates() {};

  _proto2._renderView = function _renderView() {
    this._startViewDate = this._calculateStartViewDate();

    this._setVisibilityDates();

    if (this.isRenovatedRender()) {
      if (this._isVerticalGroupedWorkSpace()) {
        this.renderRGroupPanel();
      }
    } else {
      this._applyCellTemplates(this._renderGroupHeader());
    }

    this.renderWorkSpace();

    this._updateGroupTableHeight();

    this._shader = new _uiSchedulerCurrent_time_shader.default(this);
  };

  _proto2.onDataSourceChanged = function onDataSourceChanged() {};

  _proto2.preRenderAppointments = function preRenderAppointments(options) {
    this.option('allDayExpanded', options.allDayExpanded);
  };

  _proto2.isGroupedAllDayPanel = function isGroupedAllDayPanel() {
    return this._isShowAllDayPanel() && this._isVerticalGroupedWorkSpace();
  };

  _proto2.generateRenderOptions = function generateRenderOptions(isProvideVirtualCellsWidth) {
    var _this$_getToday;

    var isVerticalGrouping = this._isVerticalGroupedWorkSpace();

    var groupCount = this._getGroupCount();

    var horizontalGroupCount = isVerticalGrouping ? 1 : groupCount;

    var rowCountInGroup = this._getRowCount();

    var cellCount = this._getTotalCellCount(groupCount);

    var rowCount = this._getTotalRowCount(groupCount, isVerticalGrouping);

    var groupOrientation = groupCount > 0 ? this.option('groupOrientation') : this._getDefaultGroupStrategy();

    var options = _extends({
      horizontalGroupCount: horizontalGroupCount,
      rowCountInGroup: rowCountInGroup,
      cellCount: cellCount,
      cellCountInGroupRow: this._getCellCount(),
      cellDataGetters: [this._getCellData.bind(this)],
      startRowIndex: 0,
      startCellIndex: 0,
      groupOrientation: groupOrientation,
      rowCount: rowCount,
      totalRowCount: rowCount,
      totalCellCount: cellCount,
      groupCount: groupCount,
      getDateHeaderText: this._getHeaderText.bind(this),
      getDateHeaderDate: this._getDateByIndex.bind(this),
      getTimeCellDate: this._getTimeCellDate.bind(this),
      today: (_this$_getToday = this._getToday) === null || _this$_getToday === void 0 ? void 0 : _this$_getToday.call(this),
      groupByDate: this.isGroupedByDate(),
      groupsList: this._getAllGroups(),
      isHorizontalGrouping: this._isHorizontalGroupedWorkSpace(),
      isVerticalGrouping: isVerticalGrouping,
      isProvideVirtualCellsWidth: isProvideVirtualCellsWidth,
      isStandaloneAllDayPanel: !isVerticalGrouping && this.isAllDayPanelVisible,
      isGroupedAllDayPanel: this.isGroupedAllDayPanel(),
      isAllDayPanelVisible: this.isAllDayPanelVisible,
      getAllDayCellData: this._getAllDayCellData.bind(this),
      isDateAndTimeView: this.isDateAndTimeView,
      selectedCells: this.cellsSelectionState.getSelectedCells(),
      focusedCell: this.cellsSelectionState.focusedCell,
      rowCountWithAllDayRow: this._getRowCountWithAllDayRows()
    }, this.virtualScrollingDispatcher.getRenderState());

    return options;
  };

  _proto2.renovatedRenderSupported = function renovatedRenderSupported() {
    return true;
  };

  _proto2.renderWorkSpace = function renderWorkSpace() {
    var isGenerateNewViewData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this._cleanAllowedPositions();

    this.cache.clear();
    this.viewDataProvider.update(this.generateRenderOptions(), isGenerateNewViewData);

    if (this.isRenovatedRender()) {
      this.renderRWorkSpace();
      this.virtualScrollingDispatcher.updateDimensions();
    } else {
      this._renderDateHeader();

      this._renderTimePanel();

      this._renderGroupAllDayPanel();

      this._renderDateTable();

      this._renderAllDayPanel();
    }
  };

  _proto2.renderRWorkSpace = function renderRWorkSpace() {
    this.renderRHeaderPanel();
    this.renderRTimeTable();
    this.renderRDateTable();
    this.renderRAllDayPanel();
  };

  _proto2.renderRDateTable = function renderRDateTable() {
    this.renderRComponent(this._$dateTable, _layout.default, 'renovatedDateTable', this._getRDateTableProps());
  };

  _proto2.renderRGroupPanel = function renderRGroupPanel() {
    var options = {
      groups: this.option('groups'),
      groupOrientation: this.option('groupOrientation'),
      groupByDate: this.isGroupedByDate(),
      resourceCellTemplate: this.option('resourceCellTemplate'),
      className: this.verticalGroupTableClass,
      baseColSpan: this.isGroupedByDate() ? 1 : this._getCellCount(),
      columnCountPerGroup: this._getCellCount()
    };

    if (this.option('groups').length) {
      this._attachGroupCountAttr();

      this.renderRComponent(this._getGroupHeaderContainer(), _group_panel.default, 'renovatedGroupPanel', options);
    } else {
      this._detachGroupCountAttr();
    }
  };

  _proto2.renderRAllDayPanel = function renderRAllDayPanel() {
    var visible = this._isShowAllDayPanel() && !this.isGroupedAllDayPanel();

    if (this.supportAllDayRow() && !this._isVerticalGroupedWorkSpace()) {
      var _this$virtualScrollin;

      this._toggleAllDayVisibility(false);

      var options = _extends({
        viewData: this.viewDataProvider.viewData,
        visible: visible,
        dataCellTemplate: this.option('dataCellTemplate'),
        startCellIndex: 0
      }, ((_this$virtualScrollin = this.virtualScrollingDispatcher.horizontalVirtualScrolling) === null || _this$virtualScrollin === void 0 ? void 0 : _this$virtualScrollin.getRenderState()) || {});

      this.renderRComponent(this._$allDayPanel, _layout2.default, 'renovatedAllDayPanel', options);
      this.renderRComponent(this._$allDayTitle, _title.default, 'renovatedAllDayPanelTitle', {
        visible: visible
      });
      this._$allDayTable = this.renovatedAllDayPanel.$element().find(".".concat(ALL_DAY_TABLE_CLASS));
    }

    this._toggleAllDayVisibility(true);
  };

  _proto2.renderRTimeTable = function renderRTimeTable() {
    this.renderRComponent(this._$timePanel, _layout3.default, 'renovatedTimePanel', {
      timePanelData: this.viewDataProvider.timePanelData,
      timeCellTemplate: this.option('timeCellTemplate'),
      groupOrientation: this.option('groupOrientation')
    });
  };

  _proto2.renderRHeaderPanel = function renderRHeaderPanel() {
    var isRenderDateHeader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (this.option('groups').length) {
      this._attachGroupCountAttr();
    } else {
      this._detachGroupCountAttr();
    }

    this.renderRComponent(this._$thead, this.renovatedHeaderPanelComponent, 'renovatedHeaderPanel', {
      dateHeaderData: this.viewDataProvider.dateHeaderData,
      dateCellTemplate: this.option('dateCellTemplate'),
      timeCellTemplate: this.option('timeCellTemplate'),
      groups: this.option('groups'),
      groupByDate: this.isGroupedByDate(),
      groupOrientation: this.option('groupOrientation'),
      resourceCellTemplate: this.option('resourceCellTemplate'),
      groupPanelCellBaseColSpan: this.isGroupedByDate() ? 1 : this._getCellCount(),
      columnCountPerGroup: this._getCellCount(),
      isRenderDateHeader: isRenderDateHeader
    });
  };

  _proto2.renderRComponent = function renderRComponent(parentElement, componentClass, componentName, viewModel) {
    var component = this[componentName];

    if (!component) {
      var container = (0, _element.getPublicElement)(parentElement);
      component = this._createComponent(container, componentClass, viewModel);
      this[componentName] = component;
    } else {
      // TODO: this is a workaround for setTablesSizes. Remove after CSS refactoring
      var $element = component.$element();
      var elementStyle = $element.get(0).style;
      var height = elementStyle.height;
      var width = elementStyle.width;
      component.option(viewModel);
      height && $element.height(height);
      width && $element.width(width);
    }
  };

  _proto2.updateCellsSelection = function updateCellsSelection() {
    var renderOptions = this.generateRenderOptions();
    this.viewDataProvider.updateViewData(renderOptions);
    this.renderRWorkSpace();
  };

  _proto2._updateGroupTableHeight = function _updateGroupTableHeight() {
    if (this._isVerticalGroupedWorkSpace() && (0, _window.hasWindow)()) {
      this._setHorizontalGroupHeaderCellsHeight();
    }
  };

  _proto2._renderDateTimeIndication = function _renderDateTimeIndication() {
    return (0, _common.noop)();
  };

  _proto2._setIndicationUpdateInterval = function _setIndicationUpdateInterval() {
    return (0, _common.noop)();
  };

  _proto2._refreshDateTimeIndication = function _refreshDateTimeIndication() {
    return (0, _common.noop)();
  };

  _proto2._isGroupsSpecified = function _isGroupsSpecified(resources) {
    return this.option('groups').length && resources;
  };

  _proto2._getGroupIndexByResourceId = function _getGroupIndexByResourceId(id) {
    var groups = this.option('groups');
    var resourceManager = this.invoke('getResourceManager');
    var resourceTree = resourceManager.createResourcesTree(groups);
    if (!resourceTree.length) return 0;
    return this._getGroupIndexRecursively(resourceTree, id);
  };

  _proto2._getGroupIndexRecursively = function _getGroupIndexRecursively(resourceTree, id) {
    var _this6 = this;

    var currentKey = resourceTree[0].name;
    var currentValue = id[currentKey];
    return resourceTree.reduce(function (prevIndex, _ref) {
      var leafIndex = _ref.leafIndex,
          value = _ref.value,
          children = _ref.children;
      var areValuesEqual = currentValue === value;

      if (areValuesEqual && leafIndex !== undefined) {
        return leafIndex;
      }

      if (areValuesEqual) {
        return _this6._getGroupIndexRecursively(children, id);
      }

      return prevIndex;
    }, 0);
  };

  _proto2._calculateStartViewDate = function _calculateStartViewDate() {
    return (0, _week.calculateStartViewDate)(this.option('currentDate'), this.option('startDayHour'), this.option('startDate'), this._getIntervalDuration(), this.option('firstDayOfWeek'));
  };

  _proto2._getViewStartByOptions = function _getViewStartByOptions() {
    return (0, _base.getViewStartByOptions)(this.option('startDate'), this.option('currentDate'), this._getIntervalDuration(), this.option('startDate') ? this._calculateViewStartDate() : undefined);
  };

  _proto2._getHeaderDate = function _getHeaderDate() {
    return this.getStartViewDate();
  };

  _proto2._calculateViewStartDate = function _calculateViewStartDate() {
    return (0, _base.calculateViewStartDate)(this.option('startDate'));
  };

  _proto2._getIntervalDuration = function _getIntervalDuration() {
    return toMs('day') * this.option('intervalCount');
  };

  _proto2._firstDayOfWeek = function _firstDayOfWeek() {
    return (0, _base.getFirstDayOfWeek)(this.option('firstDayOfWeek'));
  };

  _proto2._attachEvents = function _attachEvents() {
    this._createSelectionChangedAction();

    this._attachClickEvent();

    this._attachContextMenuEvent();
  };

  _proto2._attachClickEvent = function _attachClickEvent() {
    var that = this;

    var pointerDownAction = this._createAction(function (e) {
      that._pointerDownHandler(e.event);
    });

    this._createCellClickAction();

    var cellSelector = '.' + DATE_TABLE_CELL_CLASS + ',.' + ALL_DAY_TABLE_CELL_CLASS;
    var $element = this.$element();

    _events_engine.default.off($element, SCHEDULER_WORKSPACE_DXPOINTERDOWN_EVENT_NAME);

    _events_engine.default.off($element, SCHEDULER_CELL_DXCLICK_EVENT_NAME);

    _events_engine.default.on($element, SCHEDULER_WORKSPACE_DXPOINTERDOWN_EVENT_NAME, function (e) {
      if ((0, _index.isMouseEvent)(e) && e.which > 1) {
        e.preventDefault();
        return;
      }

      pointerDownAction({
        event: e
      });
    });

    _events_engine.default.on($element, SCHEDULER_CELL_DXCLICK_EVENT_NAME, cellSelector, function (e) {
      var $cell = (0, _renderer.default)(e.target);

      that._cellClickAction({
        event: e,
        cellElement: (0, _element.getPublicElement)($cell),
        cellData: that.getCellData($cell)
      });
    });
  };

  _proto2._createCellClickAction = function _createCellClickAction() {
    var _this7 = this;

    this._cellClickAction = this._createActionByOption('onCellClick', {
      afterExecute: function afterExecute(e) {
        return _this7._cellClickHandler(e.args[0].event);
      }
    });
  };

  _proto2._createSelectionChangedAction = function _createSelectionChangedAction() {
    this._selectionChangedAction = this._createActionByOption('onSelectionChanged');
  };

  _proto2._cellClickHandler = function _cellClickHandler() {
    if (this._showPopup) {
      delete this._showPopup;

      this._showAddAppointmentPopup();
    }
  };

  _proto2._pointerDownHandler = function _pointerDownHandler(e) {
    var $target = (0, _renderer.default)(e.target);

    if (!$target.hasClass(DATE_TABLE_CELL_CLASS) && !$target.hasClass(ALL_DAY_TABLE_CELL_CLASS)) {
      this._isCellClick = false;
      return;
    }

    this._isCellClick = true;

    if ($target.hasClass(DATE_TABLE_FOCUSED_CELL_CLASS)) {
      this._showPopup = true;
    } else {
      var cellCoordinates = this._getCoordinatesByCell($target);

      var isAllDayCell = this._hasAllDayClass($target);

      this._setSelectedCellsStateAndUpdateSelection(isAllDayCell, cellCoordinates, false, $target);
    }
  };

  _proto2._showAddAppointmentPopup = function _showAddAppointmentPopup() {
    var selectedCells = this.cellsSelectionState.getSelectedCells();
    var firstCellData = selectedCells[0];
    var lastCellData = selectedCells[selectedCells.length - 1];
    var result = {
      startDate: firstCellData.startDate,
      endDate: lastCellData.endDate
    };

    if (lastCellData.allDay !== undefined) {
      result.allDay = lastCellData.allDay;
    }

    this.invoke('showAddAppointmentPopup', result, lastCellData.groups);
  };

  _proto2._attachContextMenuEvent = function _attachContextMenuEvent() {
    this._createContextMenuAction();

    var cellSelector = '.' + DATE_TABLE_CELL_CLASS + ',.' + ALL_DAY_TABLE_CELL_CLASS;
    var $element = this.$element();
    var eventName = (0, _index.addNamespace)(_contextmenu.name, this.NAME);

    _events_engine.default.off($element, eventName, cellSelector);

    _events_engine.default.on($element, eventName, cellSelector, this._contextMenuHandler.bind(this));
  };

  _proto2._contextMenuHandler = function _contextMenuHandler(e) {
    var $cell = (0, _renderer.default)(e.target);

    this._contextMenuAction({
      event: e,
      cellElement: (0, _element.getPublicElement)($cell),
      cellData: this.getCellData($cell)
    });

    this._contextMenuHandled = true;
  };

  _proto2._createContextMenuAction = function _createContextMenuAction() {
    this._contextMenuAction = this._createActionByOption('onCellContextMenu');
  };

  _proto2._getGroupHeaderContainer = function _getGroupHeaderContainer() {
    if (this._isVerticalGroupedWorkSpace()) {
      return this._$groupTable;
    }

    return this._$thead;
  };

  _proto2._getDateHeaderContainer = function _getDateHeaderContainer() {
    return this._$thead;
  };

  _proto2._renderGroupHeader = function _renderGroupHeader() {
    var $container = this._getGroupHeaderContainer();

    var groupCount = this._getGroupCount();

    var cellTemplates = [];

    if (groupCount) {
      var groupRows = this._makeGroupRows(this.option('groups'), this.option('groupByDate'));

      this._attachGroupCountAttr();

      $container.append(groupRows.elements);
      cellTemplates = groupRows.cellTemplates;
    } else {
      this._detachGroupCountAttr();
    }

    return cellTemplates;
  };

  _proto2._applyCellTemplates = function _applyCellTemplates(templates) {
    templates === null || templates === void 0 ? void 0 : templates.forEach(function (template) {
      template();
    });
  };

  _proto2._detachGroupCountAttr = function _detachGroupCountAttr() {
    var groupedAttr = this._groupedStrategy.getGroupCountAttr();

    this.$element().removeAttr(groupedAttr.attr);
  };

  _proto2._attachGroupCountAttr = function _attachGroupCountAttr() {
    var groupedAttr = this._groupedStrategy.getGroupCountAttr(this.option('groups'));

    this.$element().attr(groupedAttr.attr, groupedAttr.count);
  };

  _proto2.headerPanelOffsetRecalculate = function headerPanelOffsetRecalculate() {
    if (!this.option('resourceCellTemplate') && !this.option('dateCellTemplate')) {
      return;
    }

    var headerPanelHeight = this.getHeaderPanelHeight();
    var headerHeight = this.invoke('getHeaderHeight');
    var allDayPanelHeight = this.isAllDayPanelVisible ? this._groupedStrategy.getAllDayTableHeight() : 0;
    headerPanelHeight && this._headerScrollable && this._headerScrollable.$element().height(headerPanelHeight + allDayPanelHeight);
    headerPanelHeight && this._dateTableScrollable.$element().css({
      'paddingBottom': allDayPanelHeight + headerPanelHeight + 'px',
      'marginBottom': -1 * (parseInt(headerPanelHeight, 10) + allDayPanelHeight) + 'px'
    });
    headerPanelHeight && this._sidebarScrollable && this._sidebarScrollable.$element().css({
      'paddingBottom': allDayPanelHeight + headerPanelHeight + 'px',
      'marginBottom': -1 * (parseInt(headerPanelHeight, 10) + allDayPanelHeight) + 'px'
    });
    this._$allDayTitle && this._$allDayTitle.css('top', headerHeight + headerPanelHeight + 'px');
  };

  _proto2._makeGroupRows = function _makeGroupRows(groups, groupByDate) {
    var tableCreatorStrategy = this._isVerticalGroupedWorkSpace() ? tableCreator.VERTICAL : tableCreator.HORIZONTAL;
    return tableCreator.makeGroupedTable(tableCreatorStrategy, groups, {
      groupHeaderRowClass: _classes.GROUP_ROW_CLASS,
      groupRowClass: _classes.GROUP_ROW_CLASS,
      groupHeaderClass: this._getGroupHeaderClass.bind(this),
      groupHeaderContentClass: _classes.GROUP_HEADER_CONTENT_CLASS
    }, this._getCellCount() || 1, this.option('resourceCellTemplate'), this._getGroupCount(), groupByDate);
  };

  _proto2._getDateHeaderTemplate = function _getDateHeaderTemplate() {
    return this.option('dateCellTemplate');
  };

  _proto2._renderDateHeader = function _renderDateHeader() {
    var container = this._getDateHeaderContainer();

    var $headerRow = (0, _renderer.default)('<tr>').addClass(HEADER_ROW_CLASS);

    var count = this._getCellCount();

    var cellTemplate = this._getDateHeaderTemplate();

    var repeatCount = this._getCalculateHeaderCellRepeatCount();

    var templateCallbacks = [];
    var groupByDate = this.isGroupedByDate();

    if (!groupByDate) {
      for (var rowIndex = 0; rowIndex < repeatCount; rowIndex++) {
        for (var columnIndex = 0; columnIndex < count; columnIndex++) {
          var templateIndex = rowIndex * count + columnIndex;

          this._renderDateHeaderTemplate($headerRow, columnIndex, templateIndex, cellTemplate, templateCallbacks);
        }
      }

      container.append($headerRow);
    } else {
      var colSpan = groupByDate ? this._getGroupCount() : 1;

      for (var _columnIndex = 0; _columnIndex < count; _columnIndex++) {
        var _templateIndex = _columnIndex * repeatCount;

        var cellElement = this._renderDateHeaderTemplate($headerRow, _columnIndex, _templateIndex, cellTemplate, templateCallbacks);

        cellElement.attr('colSpan', colSpan);
      }

      container.prepend($headerRow);
    }

    this._applyCellTemplates(templateCallbacks);

    return $headerRow;
  };

  _proto2._renderDateHeaderTemplate = function _renderDateHeaderTemplate(container, panelCellIndex, templateIndex, cellTemplate, templateCallbacks) {
    var text = this._getHeaderText(panelCellIndex);

    var $cell = (0, _renderer.default)('<th>').addClass(this._getHeaderPanelCellClass(panelCellIndex)).attr('title', text);

    if (cellTemplate !== null && cellTemplate !== void 0 && cellTemplate.render) {
      templateCallbacks.push(cellTemplate.render.bind(cellTemplate, {
        model: _extends({
          text: text,
          date: this._getDateByIndex(panelCellIndex)
        }, this._getGroupsForDateHeaderTemplate(templateIndex)),
        index: templateIndex,
        container: (0, _element.getPublicElement)($cell)
      }));
    } else {
      $cell.text(text);
    }

    container.append($cell);
    return $cell;
  };

  _proto2._getGroupsForDateHeaderTemplate = function _getGroupsForDateHeaderTemplate(templateIndex) {
    var indexMultiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var groupIndex;
    var groups;

    if (this._isHorizontalGroupedWorkSpace() && !this.isGroupedByDate()) {
      groupIndex = this._getGroupIndex(0, templateIndex * indexMultiplier);
      var resourceManager = this.invoke('getResourceManager');
      var groupsArray = resourceManager.getCellGroups(groupIndex, this.option('groups'));
      groups = this._getGroupsObjectFromGroupsArray(groupsArray);
    }

    return {
      groups: groups,
      groupIndex: groupIndex
    };
  };

  _proto2._getHeaderPanelCellClass = function _getHeaderPanelCellClass(i) {
    var cellClass = HEADER_PANEL_CELL_CLASS + ' ' + HORIZONTAL_SIZES_CLASS;
    return this._groupedStrategy.addAdditionalGroupCellClasses(cellClass, i + 1, undefined, undefined, this.isGroupedByDate());
  };

  _proto2._getCalculateHeaderCellRepeatCount = function _getCalculateHeaderCellRepeatCount() {
    return this._groupedStrategy.calculateHeaderCellRepeatCount();
  };

  _proto2._renderAllDayPanel = function _renderAllDayPanel(index) {
    var cellCount = this._getCellCount();

    if (!this._isVerticalGroupedWorkSpace()) {
      cellCount *= this._getGroupCount() || 1;
    }

    var cellTemplates = this._renderTableBody({
      container: this._allDayPanels.length ? (0, _element.getPublicElement)(this._allDayTables[index]) : (0, _element.getPublicElement)(this._$allDayTable),
      rowCount: 1,
      cellCount: cellCount,
      cellClass: this._getAllDayPanelCellClass.bind(this),
      rowClass: ALL_DAY_TABLE_ROW_CLASS,
      cellTemplate: this.option('dataCellTemplate'),
      getCellData: this._getAllDayCellData.bind(this),
      groupIndex: index
    }, true);

    this._toggleAllDayVisibility(true);

    this._applyCellTemplates(cellTemplates);
  };

  _proto2._renderGroupAllDayPanel = function _renderGroupAllDayPanel() {
    if (this._isVerticalGroupedWorkSpace()) {
      var groupCount = this._getGroupCount();

      for (var i = 0; i < groupCount; i++) {
        this._renderAllDayPanel(i);
      }
    }
  };

  _proto2._getAllDayPanelCellClass = function _getAllDayPanelCellClass(i, j) {
    var cellClass = ALL_DAY_TABLE_CELL_CLASS + ' ' + HORIZONTAL_SIZES_CLASS;
    return this._groupedStrategy.addAdditionalGroupCellClasses(cellClass, j + 1);
  };

  _proto2._getAllDayCellData = function _getAllDayCellData(cell, rowIndex, columnIndex, groupIndex) {
    var startDate = this._getDateByCellIndexes(rowIndex, columnIndex);

    var cellGroupIndex = groupIndex || this._getGroupIndex(rowIndex, columnIndex);

    startDate = _date.default.trimTime(startDate);
    var data = {
      startDate: startDate,
      endDate: startDate,
      allDay: true,
      groupIndex: cellGroupIndex
    };
    var resourceManager = this.invoke('getResourceManager');
    var groupsArray = resourceManager.getCellGroups(cellGroupIndex, this.option('groups'));

    if (groupsArray.length) {
      data.groups = this._getGroupsObjectFromGroupsArray(groupsArray);
    }

    return {
      key: CELL_DATA,
      value: data
    };
  };

  _proto2._toggleAllDayVisibility = function _toggleAllDayVisibility(isUpdateScrollable) {
    var showAllDayPanel = this._isShowAllDayPanel();

    this._$allDayPanel.toggle(showAllDayPanel);

    this._$allDayTitle && this._$allDayTitle.toggleClass(ALL_DAY_TITLE_HIDDEN_CLASS, !showAllDayPanel);
    this.$element().toggleClass(WORKSPACE_WITH_ALL_DAY_CLASS, showAllDayPanel);

    this._changeAllDayVisibility();

    isUpdateScrollable && this._updateScrollable();
  };

  _proto2._changeAllDayVisibility = function _changeAllDayVisibility() {
    this.$element().toggleClass(WORKSPACE_WITH_COLLAPSED_ALL_DAY_CLASS, !this.option('allDayExpanded') && this._isShowAllDayPanel());
  };

  _proto2._updateScrollable = function _updateScrollable() {
    this._dateTableScrollable.update();

    this._headerScrollable && this._headerScrollable.update();
    this._sidebarScrollable && this._sidebarScrollable.update();
  };

  _proto2._renderTimePanel = function _renderTimePanel() {
    var _this8 = this;

    var repeatCount = this._groupedStrategy.calculateTimeCellRepeatCount();

    var startViewDate = _utils.default.getDateWithoutTimezoneChange(this.getStartViewDate());

    var _getTimeText = function _getTimeText(i) {
      // T410490: incorrectly displaying time slots on Linux
      var index = i % _this8._getRowCount();

      if (index % 2 === 0) {
        return _date2.default.format(_this8._getTimeCellDateCore(startViewDate, i), 'shorttime');
      }

      return '';
    };

    var getTimeCellGroups = function getTimeCellGroups(rowIndex) {
      if (!_this8._isVerticalGroupedWorkSpace()) {
        return {};
      }

      var groupIndex = _this8._getGroupIndex(rowIndex, 0);

      var resourceManager = _this8.invoke('getResourceManager');

      var groupsArray = resourceManager.getCellGroups(groupIndex, _this8.option('groups'));

      var groups = _this8._getGroupsObjectFromGroupsArray(groupsArray);

      return {
        groupIndex: groupIndex,
        groups: groups
      };
    };

    this._renderTableBody({
      container: (0, _element.getPublicElement)(this._$timePanel),
      rowCount: this._getTimePanelRowCount() * repeatCount,
      cellCount: 1,
      cellClass: this._getTimeCellClass.bind(this),
      rowClass: TIME_PANEL_ROW_CLASS,
      cellTemplate: this.option('timeCellTemplate'),
      getCellText: _getTimeText.bind(this),
      getCellDate: this._getTimeCellDate.bind(this),
      groupCount: this._getGroupCount(),
      allDayElements: this._insertAllDayRowsIntoDateTable() ? this._allDayTitles : undefined,
      getTemplateData: getTimeCellGroups.bind(this)
    });
  };

  _proto2._getTimePanelRowCount = function _getTimePanelRowCount() {
    return this._getCellCountInDay();
  };

  _proto2._getCellCountInDay = function _getCellCountInDay(skipRound) {
    var result = this._calculateDayDuration() / this.option('hoursInterval');
    return skipRound ? result : Math.ceil(result);
  };

  _proto2._calculateDayDuration = function _calculateDayDuration() {
    return this.option('endDayHour') - this.option('startDayHour');
  };

  _proto2._getTimeCellClass = function _getTimeCellClass(i) {
    var cellClass = TIME_PANEL_CELL_CLASS + ' ' + VERTICAL_SIZES_CLASS;
    return this._isVerticalGroupedWorkSpace() ? this._groupedStrategy.addAdditionalGroupCellClasses(cellClass, i, i) : cellClass;
  };

  _proto2._getTimeCellDate = function _getTimeCellDate(i) {
    return this._getTimeCellDateCore(this.getStartViewDate(), i);
  };

  _proto2._getTimeCellDateCore = function _getTimeCellDateCore(startViewDate, i) {
    var result = new Date(startViewDate);
    var timeCellDuration = Math.round(this.getCellDuration());

    var cellCountInDay = this._getCellCountInDay(true);

    result.setMilliseconds(result.getMilliseconds() + timeCellDuration * (i % cellCountInDay) - this._getTimeOffsetForStartViewDate());
    return result;
  };

  _proto2._renderDateTable = function _renderDateTable() {
    var groupCount = this._getGroupCount();

    this._renderTableBody({
      container: (0, _element.getPublicElement)(this._$dateTable),
      rowCount: this._getTotalRowCount(groupCount),
      cellCount: this._getTotalCellCount(groupCount),
      cellClass: this._getDateTableCellClass.bind(this),
      rowClass: _classes.DATE_TABLE_ROW_CLASS,
      cellTemplate: this.option('dataCellTemplate'),
      getCellData: this._getCellData.bind(this),
      allDayElements: this._insertAllDayRowsIntoDateTable() ? this._allDayPanels : undefined,
      groupCount: groupCount,
      groupByDate: this.option('groupByDate')
    });
  };

  _proto2._insertAllDayRowsIntoDateTable = function _insertAllDayRowsIntoDateTable() {
    return this._groupedStrategy.insertAllDayRowsIntoDateTable();
  };

  _proto2._getTotalCellCount = function _getTotalCellCount(groupCount) {
    return this._groupedStrategy.getTotalCellCount(groupCount);
  };

  _proto2._getTotalRowCount = function _getTotalRowCount(groupCount, includeAllDayPanelRows) {
    var result = this._groupedStrategy.getTotalRowCount(groupCount);

    if (includeAllDayPanelRows && groupCount > 1 && this.isAllDayPanelVisible) {
      result += groupCount;
    }

    return result;
  };

  _proto2._getCellData = function _getCellData(cell, rowIndex, columnIndex) {
    var data = this._prepareCellData(rowIndex, columnIndex, cell);

    return {
      key: CELL_DATA,
      value: data
    };
  };

  _proto2._prepareCellData = function _prepareCellData(rowIndex, columnIndex) {
    var startDate = this._getDateByCellIndexes(rowIndex, columnIndex);

    var endDate = this.calculateEndDate(startDate);

    var groupIndex = this._getGroupIndex(rowIndex, columnIndex);

    var data = {
      startDate: startDate,
      endDate: endDate,
      allDay: this._getTableAllDay(),
      groupIndex: groupIndex
    };
    var resourceManager = this.invoke('getResourceManager');
    var groupsArray = resourceManager.getCellGroups(groupIndex, this.option('groups'));

    if (groupsArray.length) {
      data.groups = this._getGroupsObjectFromGroupsArray(groupsArray);
    }

    return data;
  };

  _proto2._getGroupIndex = function _getGroupIndex(rowIndex, columnIndex) {
    return this._groupedStrategy.getGroupIndex(rowIndex, columnIndex);
  };

  _proto2._getTableAllDay = function _getTableAllDay() {
    return false;
  };

  _proto2.calculateEndDate = function calculateEndDate(startDate) {
    var result = new Date(startDate);
    result.setMilliseconds(result.getMilliseconds() + Math.round(this._getInterval()));
    return result;
  };

  _proto2._getGroupCount = function _getGroupCount() {
    var groups = this.option('groups');
    var result = 0;

    for (var i = 0, len = groups.length; i < len; i++) {
      if (!i) {
        result = groups[i].items.length;
      } else {
        result *= groups[i].items.length;
      }
    }

    return result;
  };

  _proto2._getAllGroups = function _getAllGroups() {
    var _this9 = this;

    var groupCount = this._getGroupCount();

    var resourceManager = this.invoke('getResourceManager');
    return _toConsumableArray(new Array(groupCount)).map(function (_, groupIndex) {
      var groupsArray = resourceManager.getCellGroups(groupIndex, _this9.option('groups'));
      return _this9._getGroupsObjectFromGroupsArray(groupsArray);
    });
  };

  _proto2._getGroupsObjectFromGroupsArray = function _getGroupsObjectFromGroupsArray(groupsArray) {
    return groupsArray.reduce(function (currentGroups, _ref2) {
      var name = _ref2.name,
          id = _ref2.id;
      return _extends({}, currentGroups, _defineProperty({}, name, id));
    }, {});
  };

  _proto2._attachTablesEvents = function _attachTablesEvents() {
    var element = this.$element();

    this._attachDragEvents(element);

    this._attachPointerEvents(element);
  };

  _proto2._detachDragEvents = function _detachDragEvents(element) {
    _events_engine.default.off(element, DragEventNames.ENTER);

    _events_engine.default.off(element, DragEventNames.LEAVE);

    _events_engine.default.off(element, DragEventNames.DROP);
  };

  _proto2._attachDragEvents = function _attachDragEvents(element) {
    var _this10 = this;

    this._detachDragEvents(element);

    var onDragEnter = function onDragEnter(e) {
      _this10.removeDroppableCellClass();

      (0, _renderer.default)(e.target).addClass(DATE_TABLE_DROPPABLE_CELL_CLASS);
    };

    var onCheckDropTarget = function onCheckDropTarget(target, event) {
      return !_this10._isOutsideScrollable(target, event);
    };

    _events_engine.default.on(element, DragEventNames.ENTER, DRAG_AND_DROP_SELECTOR, {
      checkDropTarget: onCheckDropTarget
    }, onDragEnter);

    _events_engine.default.on(element, DragEventNames.LEAVE, function () {
      return _this10.removeDroppableCellClass();
    });

    _events_engine.default.on(element, DragEventNames.DROP, DRAG_AND_DROP_SELECTOR, function () {
      return _this10.removeDroppableCellClass();
    });
  };

  _proto2._attachPointerEvents = function _attachPointerEvents(element) {
    var _this11 = this;

    var isPointerDown = false;

    _events_engine.default.off(element, SCHEDULER_CELL_DXPOINTERMOVE_EVENT_NAME);

    _events_engine.default.off(element, SCHEDULER_CELL_DXPOINTERDOWN_EVENT_NAME);

    _events_engine.default.on(element, SCHEDULER_CELL_DXPOINTERDOWN_EVENT_NAME, DRAG_AND_DROP_SELECTOR, function (e) {
      if ((0, _index.isMouseEvent)(e) && e.which === 1) {
        isPointerDown = true;

        _this11.$element().addClass(WORKSPACE_WITH_MOUSE_SELECTION_CLASS);

        _events_engine.default.off(_dom_adapter.default.getDocument(), SCHEDULER_CELL_DXPOINTERUP_EVENT_NAME);

        _events_engine.default.on(_dom_adapter.default.getDocument(), SCHEDULER_CELL_DXPOINTERUP_EVENT_NAME, function () {
          isPointerDown = false;

          _this11.$element().removeClass(WORKSPACE_WITH_MOUSE_SELECTION_CLASS);
        });
      }
    });

    _events_engine.default.on(element, SCHEDULER_CELL_DXPOINTERMOVE_EVENT_NAME, DRAG_AND_DROP_SELECTOR, function (e) {
      if (isPointerDown && _this11._dateTableScrollable && !_this11._dateTableScrollable.option('scrollByContent')) {
        e.preventDefault();
        e.stopPropagation();

        _this11._moveToCell((0, _renderer.default)(e.target), true);
      }
    });
  };

  _proto2._getDateTables = function _getDateTables() {
    return this._$dateTable.add(this._$allDayTable);
  };

  _proto2._getDateTable = function _getDateTable() {
    return this._$dateTable;
  };

  _proto2._getInterval = function _getInterval() {
    if (this._interval === undefined) {
      this._interval = this.option('hoursInterval') * HOUR_MS;
    }

    return this._interval;
  };

  _proto2._getHeaderText = function _getHeaderText(headerIndex) {
    return _date2.default.format(this._getDateForHeaderText(headerIndex), this._getFormat());
  };

  _proto2._getDateForHeaderText = function _getDateForHeaderText(index) {
    return this._getDateByIndex(index);
  };

  _proto2._getDateByIndex = function _getDateByIndex() {
    return abstract();
  };

  _proto2._getFormat = function _getFormat() {
    return abstract();
  };

  _proto2._calculateCellIndex = function _calculateCellIndex(rowIndex, columnIndex) {
    return this._groupedStrategy.calculateCellIndex(rowIndex, columnIndex);
  };

  _proto2._renderTableBody = function _renderTableBody(options, delayCellTemplateRendering) {
    var result = [];

    if (!delayCellTemplateRendering) {
      this._applyCellTemplates(tableCreator.makeTable(options));
    } else {
      result = tableCreator.makeTable(options);
    }

    return result;
  };

  _proto2._removeAllDayElements = function _removeAllDayElements() {
    this._$allDayTable && this._$allDayTable.remove();
    this._$allDayTitle && this._$allDayTitle.remove();
  };

  _proto2._cleanView = function _cleanView() {
    var _this$_shader;

    this.cache.clear();

    this._cleanTableWidths();

    this._cleanAllowedPositions();

    this.cellsSelectionState.clearSelectedAndFocusedCells();

    if (!this.isRenovatedRender()) {
      var _this$_$allDayTable, _this$_$sidebarTable;

      this._$thead.empty();

      this._$dateTable.empty();

      this._$timePanel.empty();

      this._$groupTable.empty();

      (_this$_$allDayTable = this._$allDayTable) === null || _this$_$allDayTable === void 0 ? void 0 : _this$_$allDayTable.empty();
      (_this$_$sidebarTable = this._$sidebarTable) === null || _this$_$sidebarTable === void 0 ? void 0 : _this$_$sidebarTable.empty();
    }

    (_this$_shader = this._shader) === null || _this$_shader === void 0 ? void 0 : _this$_shader.clean();
    delete this._hiddenInterval;
    delete this._interval;
  };

  _proto2._clean = function _clean() {
    _events_engine.default.off(_dom_adapter.default.getDocument(), SCHEDULER_CELL_DXPOINTERUP_EVENT_NAME);

    this._disposeRenovatedComponents();

    _WidgetObserver.prototype._clean.call(this);
  };

  _proto2._cleanTableWidths = function _cleanTableWidths() {
    this._$headerPanel.css('width', '');

    this._$dateTable.css('width', '');

    this._$allDayTable && this._$allDayTable.css('width', '');
  };

  _proto2._disposeRenovatedComponents = function _disposeRenovatedComponents() {
    var _this$renovatedAllDay, _this$renovatedDateTa, _this$renovatedTimePa, _this$renovatedGroupP, _this$renovatedHeader;

    (_this$renovatedAllDay = this.renovatedAllDayPanel) === null || _this$renovatedAllDay === void 0 ? void 0 : _this$renovatedAllDay.dispose();
    this.renovatedAllDayPanel = undefined;
    (_this$renovatedDateTa = this.renovatedDateTable) === null || _this$renovatedDateTa === void 0 ? void 0 : _this$renovatedDateTa.dispose();
    this.renovatedDateTable = undefined;
    (_this$renovatedTimePa = this.renovatedTimePanel) === null || _this$renovatedTimePa === void 0 ? void 0 : _this$renovatedTimePa.dispose();
    this.renovatedTimePanel = undefined;
    (_this$renovatedGroupP = this.renovatedGroupPanel) === null || _this$renovatedGroupP === void 0 ? void 0 : _this$renovatedGroupP.dispose();
    this.renovatedGroupPanel = undefined;
    (_this$renovatedHeader = this.renovatedHeaderPanel) === null || _this$renovatedHeader === void 0 ? void 0 : _this$renovatedHeader.dispose();
    this.renovatedHeaderPanel = undefined;
  };

  _proto2.getWorkArea = function getWorkArea() {
    return this._dateTableScrollable.$content();
  };

  _proto2.getScrollable = function getScrollable() {
    return this._dateTableScrollable;
  };

  _proto2.getScrollableScrollTop = function getScrollableScrollTop() {
    return this._dateTableScrollable.scrollTop();
  };

  _proto2.getGroupedScrollableScrollTop = function getGroupedScrollableScrollTop(allDay) {
    return this._groupedStrategy.getScrollableScrollTop(allDay);
  };

  _proto2.getScrollableScrollLeft = function getScrollableScrollLeft() {
    return this._dateTableScrollable.scrollLeft();
  };

  _proto2.getScrollableOuterWidth = function getScrollableOuterWidth() {
    return this._dateTableScrollable.scrollWidth();
  };

  _proto2.getScrollableContainer = function getScrollableContainer() {
    return this._dateTableScrollable._container();
  };

  _proto2.getHeaderPanelHeight = function getHeaderPanelHeight() {
    return this._$headerPanel && this._$headerPanel.outerHeight(true);
  };

  _proto2.getTimePanelWidth = function getTimePanelWidth() {
    return this._$timePanel && (0, _position.getBoundingRect)(this._$timePanel.get(0)).width;
  };

  _proto2.getGroupTableWidth = function getGroupTableWidth() {
    return this._$groupTable ? this._$groupTable.outerWidth() : 0;
  };

  _proto2.getWorkSpaceLeftOffset = function getWorkSpaceLeftOffset() {
    return this._groupedStrategy.getLeftOffset();
  };

  _proto2.getGroupedStrategy = function getGroupedStrategy() {
    return this._groupedStrategy;
  };

  _proto2._getCellCoordinatesByIndex = function _getCellCoordinatesByIndex(index) {
    var columnIndex = Math.floor(index / this._getRowCount());
    var rowIndex = index - this._getRowCount() * columnIndex;
    return {
      columnIndex: columnIndex,
      rowIndex: rowIndex
    };
  };

  _proto2._getDateByCellIndexes = function _getDateByCellIndexes(rowIndex, columnIndex, patchedIndexes) {
    columnIndex = !patchedIndexes ? this._patchColumnIndex(columnIndex) : columnIndex;
    var firstViewDate = this.getStartViewDate();
    var isFirstViewDateDuringDST = firstViewDate.getHours() !== Math.floor(this.option('startDayHour'));

    if (isFirstViewDateDuringDST) {
      var dateWithCorrectHours = this._getFirstViewDateWithoutDST();

      firstViewDate = new Date(dateWithCorrectHours - toMs('day'));
    }

    var firstViewDateTime = firstViewDate.getTime();

    var millisecondsOffset = this._getMillisecondsOffset(rowIndex, columnIndex);

    var offsetByCount = this._getOffsetByCount(columnIndex);

    var currentDate = new Date(firstViewDateTime + millisecondsOffset + offsetByCount);

    var timeZoneDifference = _date.default.getTimezonesDifference(firstViewDate, currentDate);

    if (isFirstViewDateDuringDST) {
      timeZoneDifference = 0;
    }

    currentDate.setTime(currentDate.getTime() + timeZoneDifference);
    return currentDate;
  };

  _proto2._patchColumnIndex = function _patchColumnIndex(columnIndex) {
    if (this.isGroupedByDate()) {
      columnIndex = Math.floor(columnIndex / this._getGroupCount());
    }

    return columnIndex;
  };

  _proto2._getOffsetByCount = function _getOffsetByCount() {
    return 0;
  };

  _proto2._getMillisecondsOffset = function _getMillisecondsOffset(rowIndex, columnIndex) {
    return this._getInterval() * this._calculateCellIndex(rowIndex, columnIndex) + this._calculateHiddenInterval(rowIndex, columnIndex);
  };

  _proto2._calculateHiddenInterval = function _calculateHiddenInterval(rowIndex, columnIndex) {
    var dayCount = columnIndex % this._getCellCount();

    return dayCount * this._getHiddenInterval();
  };

  _proto2._getHiddenInterval = function _getHiddenInterval() {
    if (this._hiddenInterval === undefined) {
      this._hiddenInterval = DAY_MS - this.getVisibleDayDuration();
    }

    return this._hiddenInterval;
  };

  _proto2._getIntervalBetween = function _getIntervalBetween(currentDate, allDay) {
    var firstViewDate = this.getStartViewDate();
    var startDayTime = this.option('startDayHour') * HOUR_MS;

    var timeZoneOffset = _date.default.getTimezonesDifference(firstViewDate, currentDate);

    var fullInterval = currentDate.getTime() - firstViewDate.getTime() - timeZoneOffset;

    var days = this._getDaysOfInterval(fullInterval, startDayTime);

    var weekendsCount = this._getWeekendsCount(days);

    var result = (days - weekendsCount) * DAY_MS;

    if (!allDay) {
      result = fullInterval - days * this._getHiddenInterval() - weekendsCount * this.getVisibleDayDuration();
    }

    return result;
  };

  _proto2._getWeekendsCount = function _getWeekendsCount() {
    return 0;
  };

  _proto2._getDaysOfInterval = function _getDaysOfInterval(fullInterval, startDayTime) {
    return Math.floor((fullInterval + startDayTime) / DAY_MS);
  };

  _proto2._getGroupIndexes = function _getGroupIndexes(appointmentResources) {
    var result = [];

    if (this._isGroupsSpecified(appointmentResources)) {
      var resourceManager = this.invoke('getResourceManager');
      var tree = resourceManager.createResourcesTree(this.option('groups'));
      result = resourceManager.getResourceTreeLeaves(tree, appointmentResources);
    }

    return result;
  };

  _proto2._updateIndex = function _updateIndex(index) {
    return index * this._getRowCount();
  };

  _proto2._getDroppableCell = function _getDroppableCell() {
    return this._getDateTables().find('.' + DATE_TABLE_DROPPABLE_CELL_CLASS);
  };

  _proto2._getWorkSpaceWidth = function _getWorkSpaceWidth() {
    var _this12 = this;

    return this.cache.get('workspaceWidth', function () {
      if (_this12._needCreateCrossScrolling()) {
        return (0, _position.getBoundingRect)(_this12._$dateTable.get(0)).width;
      }

      return (0, _position.getBoundingRect)(_this12.$element().get(0)).width - _this12.getTimePanelWidth();
    });
  };

  _proto2._getCellPositionByIndex = function _getCellPositionByIndex(index, groupIndex, inAllDayRow) {
    var cellCoordinates = this._getCellCoordinatesByIndex(index);

    var $cell = this._getCellByCoordinates(cellCoordinates, groupIndex, inAllDayRow);

    return this._getCellPositionWithCache($cell, cellCoordinates, groupIndex, inAllDayRow && !this._isVerticalGroupedWorkSpace());
  };

  _proto2._getCellPositionWithCache = function _getCellPositionWithCache($cell, cellCoordinates, groupIndex, inAllDayPanel) {
    var result = this._getCellPosition(cellCoordinates, inAllDayPanel);

    this.setCellDataCache(cellCoordinates, groupIndex, $cell);

    if (result) {
      result.rowIndex = cellCoordinates.rowIndex;
      result.columnIndex = cellCoordinates.columnIndex;
    }

    return result;
  };

  _proto2._getCellPosition = function _getCellPosition(cellCoordinates, isAllDayPanel) {
    var _this$getDOMElementsM = this.getDOMElementsMetaData(),
        dateTableCellsMeta = _this$getDOMElementsM.dateTableCellsMeta,
        allDayPanelCellsMeta = _this$getDOMElementsM.allDayPanelCellsMeta;

    var columnIndex = cellCoordinates.columnIndex,
        rowIndex = cellCoordinates.rowIndex;
    var position = isAllDayPanel ? allDayPanelCellsMeta[columnIndex] : dateTableCellsMeta[rowIndex][columnIndex];

    var validPosition = _extends({}, position);

    if (this.option('rtlEnabled')) {
      validPosition.left += position.width;
    }

    return validPosition;
  };

  _proto2._getCellByCoordinates = function _getCellByCoordinates(cellCoordinates, groupIndex, inAllDayRow) {
    var indexes = this._groupedStrategy.prepareCellIndexes(cellCoordinates, groupIndex, inAllDayRow);

    return this._dom_getDateCell(indexes);
  } // TODO DOM adapter
  ;

  _proto2._dom_getDateCell = function _dom_getDateCell(position) {
    return this._$dateTable.find("tr:not(.".concat(VIRTUAL_ROW_CLASS, ")")).eq(position.rowIndex).find("td:not(.".concat(_classes.VIRTUAL_CELL_CLASS, ")")).eq(position.columnIndex);
  };

  _proto2._dom_getAllDayPanelCell = function _dom_getAllDayPanelCell(columnIndex) {
    return this._$allDayPanel.find('tr').eq(0).find('td').eq(columnIndex);
  };

  _proto2._getCells = function _getCells(allDay, direction) {
    var cellClass = allDay ? ALL_DAY_TABLE_CELL_CLASS : DATE_TABLE_CELL_CLASS;

    if (direction === 'vertical') {
      var result = [];

      for (var i = 1;; i++) {
        var cells = this.$element().find("tr .".concat(cellClass, ":nth-child(").concat(i, ")"));
        if (!cells.length) break;
        result = result.concat(cells.toArray());
      }

      return (0, _renderer.default)(result);
    } else {
      return this.$element().find('.' + cellClass);
    }
  };

  _proto2._getAllCells = function _getAllCells(allDay) {
    if (this._isVerticalGroupedWorkSpace()) {
      return this._$dateTable.find("td:not(.".concat(_classes.VIRTUAL_CELL_CLASS, ")"));
    }

    var cellClass = allDay && this.supportAllDayRow() ? ALL_DAY_TABLE_CELL_CLASS : DATE_TABLE_CELL_CLASS;
    return this.$element().find('.' + cellClass);
  };

  _proto2._setHorizontalGroupHeaderCellsHeight = function _setHorizontalGroupHeaderCellsHeight() {
    var height = (0, _position.getBoundingRect)(this._$dateTable.get(0)).height;

    this._$groupTable.outerHeight(height);
  };

  _proto2._getGroupHeaderCells = function _getGroupHeaderCells() {
    return this.$element().find('.' + GROUP_HEADER_CLASS);
  };

  _proto2._getScrollCoordinates = function _getScrollCoordinates(hours, minutes, date, groupIndex, allDay) {
    var currentDate = date || new Date(this.option('currentDate'));
    var startDayHour = this.option('startDayHour');
    var endDayHour = this.option('endDayHour');

    if (hours < startDayHour) {
      hours = startDayHour;
    }

    if (hours >= endDayHour) {
      hours = endDayHour - 1;
    }

    currentDate.setHours(hours, minutes, 0, 0);

    if (!this.isVirtualScrolling()) {
      return this.getCoordinatesByDate(currentDate, groupIndex, allDay);
    }

    var cell = this.viewDataProvider.findGlobalCellPosition(currentDate, groupIndex, allDay);
    var position = cell.position,
        cellData = cell.cellData;
    return this.virtualScrollingDispatcher.calculateCoordinatesByDataAndPosition(cellData, position, currentDate, this.isDateAndTimeView, this.viewDirection === 'vertical');
  };

  _proto2._isOutsideScrollable = function _isOutsideScrollable(target, event) {
    var $dateTableScrollableElement = this._dateTableScrollable.$element();

    var scrollableSize = (0, _position.getBoundingRect)($dateTableScrollableElement.get(0));
    var window = (0, _window.getWindow)();
    var isTargetInAllDayPanel = !(0, _renderer.default)(target).closest($dateTableScrollableElement).length;
    var isOutsideHorizontalScrollable = event.pageX < scrollableSize.left || event.pageX > scrollableSize.left + scrollableSize.width + (window.scrollX || 0);
    var isOutsideVerticalScrollable = event.pageY < scrollableSize.top || event.pageY > scrollableSize.top + scrollableSize.height + (window.scrollY || 0);

    if (isTargetInAllDayPanel && !isOutsideHorizontalScrollable) {
      return false;
    }

    return isOutsideVerticalScrollable || isOutsideHorizontalScrollable;
  };

  _proto2.setCellDataCache = function setCellDataCache(cellCoordinates, groupIndex, $cell) {
    var key = JSON.stringify({
      rowIndex: cellCoordinates.rowIndex,
      columnIndex: cellCoordinates.columnIndex,
      groupIndex: groupIndex
    });
    this.cache.set(key, this.getCellData($cell));
  };

  _proto2.setCellDataCacheAlias = function setCellDataCacheAlias(appointment, geometry) {
    var key = JSON.stringify({
      rowIndex: appointment.rowIndex,
      columnIndex: appointment.columnIndex,
      groupIndex: appointment.groupIndex
    });
    var aliasKey = JSON.stringify({
      top: geometry.top,
      left: geometry.left
    });
    this.cache.set(aliasKey, this.cache.get(key));
  };

  _proto2._cleanAllowedPositions = function _cleanAllowedPositions() {
    this._maxAllowedVerticalPosition = [];
    this._maxAllowedPosition = [];
  };

  _proto2.supportAllDayRow = function supportAllDayRow() {
    return true;
  };

  _proto2.keepOriginalHours = function keepOriginalHours() {
    return false;
  };

  _proto2.getSelectedCellData = function getSelectedCellData() {
    return this.cellsSelectionState.getSelectedCells();
  };

  _proto2.getCellData = function getCellData($cell) {
    var cellData = this._getFullCellData($cell) || {};
    return (0, _extend.extend)(true, {}, {
      startDate: cellData.startDate,
      endDate: cellData.endDate,
      groups: cellData.groups,
      groupIndex: cellData.groupIndex,
      allDay: cellData.allDay
    });
  };

  _proto2._getFullCellData = function _getFullCellData($cell) {
    var currentCell = $cell[0];

    if (currentCell) {
      return this._getDataByCell($cell);
    }

    return undefined;
  };

  _proto2._getVirtualRowOffset = function _getVirtualRowOffset() {
    return this.virtualScrollingDispatcher.virtualRowOffset;
  };

  _proto2._getVirtualCellOffset = function _getVirtualCellOffset() {
    return this.virtualScrollingDispatcher.virtualCellOffset;
  };

  _proto2._getDataByCell = function _getDataByCell($cell) {
    var rowIndex = $cell.parent().index() - this.virtualScrollingDispatcher.topVirtualRowsCount;
    var columnIndex = $cell.index() - this.virtualScrollingDispatcher.leftVirtualCellsCount;
    var viewDataProvider = this.viewDataProvider;

    var isAllDayCell = this._hasAllDayClass($cell);

    var cellData = viewDataProvider.getCellData(rowIndex, columnIndex, isAllDayCell);
    return cellData ? cellData : undefined;
  };

  _proto2._getHorizontalMax = function _getHorizontalMax(groupIndex) {
    if (this.isVirtualScrolling()) {
      return this.getMaxAllowedPosition(groupIndex);
    }

    var correctedGroupIndex = this.isGroupedByDate() ? this._getGroupCount() - 1 : groupIndex;
    return this.getMaxAllowedPosition(correctedGroupIndex);
  };

  _proto2.getCoordinatesByDate = function getCoordinatesByDate(date, groupIndex, inAllDayRow) {
    var validGroupIndex = groupIndex || 0;
    var cellInfo = {
      groupIndex: validGroupIndex,
      startDate: date,
      isAllDay: inAllDayRow
    };
    var positionByMap = this.viewDataProvider.findCellPositionInMap(cellInfo);

    if (!positionByMap) {
      return undefined;
    }

    var $cell = this._dom_getDateCell(positionByMap);

    var position = this._getCellPositionWithCache($cell, positionByMap, validGroupIndex, inAllDayRow && !this._isVerticalGroupedWorkSpace());

    var shift = this.getPositionShift(inAllDayRow ? 0 : this.getTimeShift(date), inAllDayRow);

    var horizontalHMax = this._getHorizontalMax(validGroupIndex, date);

    return {
      cellPosition: position.left + shift.cellPosition,
      top: position.top + shift.top,
      left: position.left + shift.left,
      rowIndex: position.rowIndex,
      columnIndex: position.columnIndex,
      hMax: horizontalHMax,
      vMax: this.getVerticalMax(validGroupIndex),
      groupIndex: validGroupIndex
    };
  };

  _proto2.getVerticalMax = function getVerticalMax(groupIndex) {
    return this._groupedStrategy.getVerticalMax(groupIndex);
  };

  _proto2._getOffsetByAllDayPanel = function _getOffsetByAllDayPanel(groupIndex) {
    return this._groupedStrategy._getOffsetByAllDayPanel(groupIndex);
  };

  _proto2._getGroupTop = function _getGroupTop(groupIndex) {
    return this._groupedStrategy._getGroupTop(groupIndex);
  };

  _proto2.isGroupedByDate = function isGroupedByDate() {
    return this.option('groupByDate') && this._isHorizontalGroupedWorkSpace() && this._getGroupCount() > 0;
  };

  _proto2.getCellIndexByDate = function getCellIndexByDate(date, inAllDayRow) {
    var timeInterval = inAllDayRow ? 24 * 60 * 60 * 1000 : this._getInterval();

    var dateTimeStamp = this._getIntervalBetween(date, inAllDayRow) + this._getTimeOffsetForStartViewDate();

    var index = Math.floor(dateTimeStamp / timeInterval);

    if (inAllDayRow) {
      index = this._updateIndex(index);
    }

    if (index < 0) {
      index = 0;
    }

    return index;
  };

  _proto2.getPositionShift = function getPositionShift(timeShift, isAllDay) {
    return {
      top: timeShift * this.getCellHeight(),
      left: 0,
      cellPosition: 0
    };
  };

  _proto2.getTimeShift = function getTimeShift(date) {
    var currentDayStart = new Date(date);
    var cellDuration = this.getCellDuration();
    var currentDayEndHour = new Date(new Date(date).setHours(this.option('endDayHour'), 0, 0));

    if (date.getTime() <= currentDayEndHour.getTime()) {
      currentDayStart.setHours(this.option('startDayHour'), 0, 0, 0);
    }

    var timeZoneDifference = _date.default.getTimezonesDifference(date, currentDayStart);

    var currentDateTime = date.getTime();
    var currentDayStartTime = currentDayStart.getTime();

    var minTime = this._startViewDate.getTime();

    return currentDateTime > minTime ? (currentDateTime - currentDayStartTime + timeZoneDifference) % cellDuration / cellDuration : 0;
  };

  _proto2._isSkippedData = function _isSkippedData() {
    return false;
  };

  _proto2.getCoordinatesByDateInGroup = function getCoordinatesByDateInGroup(startDate, appointmentResources, inAllDayRow, groupIndex) {
    var _this13 = this;

    var result = [];

    if (this._isSkippedData(startDate)) {
      return result;
    }

    var groupIndices = [groupIndex];

    if (!(0, _type.isDefined)(groupIndex)) {
      groupIndices = this._getGroupCount() ? this._getGroupIndexes(appointmentResources) : [0];
    }

    groupIndices.forEach(function (groupIndex) {
      var coordinates = _this13.getCoordinatesByDate(startDate, groupIndex, inAllDayRow);

      coordinates && result.push(coordinates);
    });
    return result;
  };

  _proto2.getDroppableCellIndex = function getDroppableCellIndex() {
    var $droppableCell = this._getDroppableCell();

    var $row = $droppableCell.parent();
    var rowIndex = $row.index();
    return rowIndex * $row.find('td').length + $droppableCell.index();
  };

  _proto2.getDataByDroppableCell = function getDataByDroppableCell() {
    var cellData = this.getCellData((0, _renderer.default)(this._getDroppableCell()));
    var allDay = cellData.allDay;
    var startDate = cellData.startDate;
    var endDate = cellData.endDate;
    return {
      startDate: startDate,
      endDate: endDate,
      allDay: allDay,
      groups: cellData.groups
    };
  };

  _proto2.getDateRange = function getDateRange() {
    return [this.getStartViewDate(), this.getEndViewDateByEndDayHour()];
  };

  _proto2.getCellWidth = function getCellWidth() {
    var _this14 = this;

    return this.cache.get('cellWidth', function () {
      var cell = _this14._getCells().first().get(0);

      return cell && (0, _position.getBoundingRect)(cell).width;
    });
  };

  _proto2.getCellMinWidth = function getCellMinWidth() {
    return DATE_TABLE_MIN_CELL_WIDTH;
  };

  _proto2.getRoundedCellWidth = function getRoundedCellWidth(groupIndex, startIndex, cellCount) {
    if (groupIndex < 0) {
      return 0;
    }

    var $row = this.$element().find(".".concat(_classes.DATE_TABLE_ROW_CLASS)).eq(0);
    var width = 0;
    var $cells = $row.find('.' + DATE_TABLE_CELL_CLASS);
    var totalCellCount = this._getCellCount() * groupIndex;
    cellCount = cellCount || this._getCellCount();

    if (!(0, _type.isDefined)(startIndex)) {
      startIndex = totalCellCount;
    }

    for (var i = startIndex; i < totalCellCount + cellCount; i++) {
      width = width + (0, _position.getBoundingRect)((0, _renderer.default)($cells).eq(i).get(0)).width;
    }

    return width / (totalCellCount + cellCount - startIndex);
  };

  _proto2.getCellHeight = function getCellHeight() {
    var _this15 = this;

    var useCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var callbackResult = function callbackResult() {
      var cell = _this15._getCells().first().get(0);

      return cell && (0, _position.getBoundingRect)(cell).height;
    };

    return useCache ? this.cache.get('cellHeight', callbackResult) : callbackResult();
  };

  _proto2.getAllDayHeight = function getAllDayHeight() {
    var cell = this._getCells(true).first().get(0);

    return this._isShowAllDayPanel() ? cell && (0, _position.getBoundingRect)(cell).height || 0 : 0;
  };

  _proto2.getAllDayOffset = function getAllDayOffset() {
    return this._groupedStrategy.getAllDayOffset();
  };

  _proto2.getMaxAllowedPosition = function getMaxAllowedPosition(groupIndex) {
    var validGroupIndex = groupIndex || 0;
    return this.getMaxAllowedHorizontalPosition(validGroupIndex);
  };

  _proto2.getMaxAllowedHorizontalPosition = function getMaxAllowedHorizontalPosition(groupIndex) {
    var _this16 = this;

    var getMaxPosition = function getMaxPosition(columnIndex) {
      var cell = _this16._$dateTable.find("tr:not(.".concat(VIRTUAL_ROW_CLASS, ")")).first().find("td:not(.".concat(_classes.VIRTUAL_CELL_CLASS, ")")).get(columnIndex);

      var maxPosition = (0, _renderer.default)(cell).position().left;

      if (!_this16.option('rtlEnabled')) {
        maxPosition += (0, _position.getBoundingRect)(cell).width;
      }

      _this16._maxAllowedPosition[groupIndex] = Math.round(maxPosition);
    };

    if (!this._maxAllowedPosition[groupIndex]) {
      var _this$viewDataProvide = this.viewDataProvider.getLastGroupCellPosition(groupIndex),
          columnIndex = _this$viewDataProvide.columnIndex;

      getMaxPosition(columnIndex);
    }

    return this._maxAllowedPosition[groupIndex];
  };

  _proto2.getMaxAllowedVerticalPosition = function getMaxAllowedVerticalPosition(groupIndex) {
    var _this17 = this;

    var getMaxPosition = function getMaxPosition(rowIndex) {
      var row = _this17._$dateTable.find("tr:not(.".concat(VIRTUAL_ROW_CLASS, ")")).get(rowIndex);

      var maxPosition = (0, _renderer.default)(row).position().top + (0, _position.getBoundingRect)(row).height; // TODO remove while refactoring dual calculcations.
      // Should decrease allDayPanel amount due to the dual calculation corrections.

      if (_this17.isGroupedAllDayPanel()) {
        maxPosition -= (groupIndex + 1) * _this17.getAllDayHeight();
      }

      _this17._maxAllowedVerticalPosition[groupIndex] = Math.round(maxPosition);
    };

    if (!this._maxAllowedVerticalPosition[groupIndex]) {
      var _this$viewDataProvide2 = this.viewDataProvider.getLastGroupCellPosition(groupIndex),
          rowIndex = _this$viewDataProvide2.rowIndex;

      getMaxPosition(rowIndex);
    }

    return this._maxAllowedVerticalPosition[groupIndex];
  };

  _proto2.getFixedContainer = function getFixedContainer() {
    return this._$fixedContainer;
  };

  _proto2.getAllDayContainer = function getAllDayContainer() {
    return this._$allDayContainer;
  } // NOTE: refactor leftIndex calculation
  ;

  _proto2.getCellIndexByCoordinates = function getCellIndexByCoordinates(coordinates, allDay) {
    var cellCount = this._getTotalCellCount(this._getGroupCount());

    var cellWidth = Math.floor(this._getWorkSpaceWidth() / cellCount);
    var cellHeight = allDay ? this.getAllDayHeight() : this.getCellHeight();
    var leftOffset = this._isRTL() || this.option('crossScrollingEnabled') ? 0 : this.getWorkSpaceLeftOffset();
    var topIndex = Math.floor(Math.floor(coordinates.top) / Math.floor(cellHeight));
    var leftIndex = Math.floor((coordinates.left + 5 - leftOffset) / cellWidth);

    if (this._isRTL()) {
      leftIndex = cellCount - leftIndex - 1;
    }

    return cellCount * topIndex + leftIndex;
  };

  _proto2.getStartViewDate = function getStartViewDate() {
    return this._startViewDate;
  };

  _proto2.getEndViewDate = function getEndViewDate() {
    var dateOfLastViewCell = this.getDateOfLastViewCell();
    var endDateOfLastViewCell = this.calculateEndViewDate(dateOfLastViewCell);
    return this._adjustEndViewDateByDaylightDiff(dateOfLastViewCell, endDateOfLastViewCell);
  };

  _proto2.getEndViewDateByEndDayHour = function getEndViewDateByEndDayHour() {
    var dateOfLastViewCell = this.getDateOfLastViewCell();

    var endTime = _date.default.dateTimeFromDecimal(this.option('endDayHour'));

    var endDateOfLastViewCell = new Date(dateOfLastViewCell.setHours(endTime.hours, endTime.minutes));
    return this._adjustEndViewDateByDaylightDiff(dateOfLastViewCell, endDateOfLastViewCell);
  };

  _proto2.calculateEndViewDate = function calculateEndViewDate(dateOfLastViewCell) {
    return new Date(dateOfLastViewCell.getTime() + this.getCellDuration());
  };

  _proto2._adjustEndViewDateByDaylightDiff = function _adjustEndViewDateByDaylightDiff(startDate, endDate) {
    var daylightDiff = _utils.default.getDaylightOffsetInMs(startDate, endDate);

    var endDateOfLastViewCell = new Date(endDate.getTime() - daylightDiff);
    return new Date(endDateOfLastViewCell.getTime() - this._getEndViewDateTimeDiff());
  };

  _proto2._getEndViewDateTimeDiff = function _getEndViewDateTimeDiff() {
    return toMs('minute');
  };

  _proto2.getDateOfLastViewCell = function getDateOfLastViewCell() {
    var rowIndex = this._getRowCount() - 1;

    var columnIndex = this._getCellCount();

    if (this.isGroupedByDate()) {
      columnIndex = columnIndex * this._getGroupCount() - 1;
    } else {
      columnIndex = columnIndex - 1;
    }

    return this._getDateByCellIndexes(rowIndex, columnIndex, true);
  };

  _proto2.getCellDuration = function getCellDuration() {
    return 3600000 * this.option('hoursInterval');
  };

  _proto2.getIntervalDuration = function getIntervalDuration(allDay) {
    return allDay ? toMs('day') : this.getCellDuration();
  };

  _proto2.getVisibleDayDuration = function getVisibleDayDuration() {
    return this.option('hoursInterval') * this._getCellCountInDay() * HOUR_MS;
  };

  _proto2.getGroupBounds = function getGroupBounds(coordinates) {
    var cellCount = this._getCellCount();

    var $cells = this._getCells();

    var cellWidth = this.getCellWidth();
    var groupedDataMap = this.viewDataProvider.groupedDataMap;

    var result = this._groupedStrategy.getGroupBoundsOffset(cellCount, $cells, cellWidth, coordinates, groupedDataMap);

    if (this._isRTL()) {
      var startOffset = result.left;
      result.left = result.right - cellWidth * 2;
      result.right = startOffset + cellWidth * 2;
    }

    return result;
  };

  _proto2.needRecalculateResizableArea = function needRecalculateResizableArea() {
    return this._isVerticalGroupedWorkSpace() && this.getScrollable().scrollTop() !== 0;
  };

  _proto2.getCellDataByCoordinates = function getCellDataByCoordinates(coordinates, allDay) {
    var _this18 = this;

    var key = JSON.stringify({
      top: coordinates.top,
      left: coordinates.left
    });
    return this.cache.get(key, function () {
      var $cells = _this18._getCells(allDay);

      var cellIndex = _this18.getCellIndexByCoordinates(coordinates, allDay);

      var $cell = $cells.eq(cellIndex);
      return _this18.getCellData($cell);
    });
  };

  _proto2.getVisibleBounds = function getVisibleBounds() {
    var result = {};
    var $scrollable = this.getScrollable().$element();
    var cellHeight = this.getCellHeight();
    var scrolledCellCount = this.getScrollableScrollTop() / cellHeight;
    var totalCellCount = scrolledCellCount + $scrollable.height() / cellHeight;
    result.top = {
      hours: Math.floor(scrolledCellCount * this.option('hoursInterval')) + this.option('startDayHour'),
      minutes: scrolledCellCount % 2 ? 30 : 0
    };
    result.bottom = {
      hours: Math.floor(totalCellCount * this.option('hoursInterval')) + this.option('startDayHour'),
      minutes: Math.floor(totalCellCount) % 2 ? 30 : 0
    };
    return result;
  };

  _proto2.updateScrollPosition = function updateScrollPosition(date, groups) {
    var allDay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var timeZoneCalculator = (0, _instanceFactory.getTimeZoneCalculator)(this.option('key'));
    var newDate = timeZoneCalculator.createDate(date, {
      path: 'toGrid'
    });
    var inAllDayRow = allDay && this.isAllDayPanelVisible;

    if (this.needUpdateScrollPosition(newDate, groups, inAllDayRow)) {
      this.scrollTo(newDate, groups, inAllDayRow, false);
    }
  };

  _proto2.needUpdateScrollPosition = function needUpdateScrollPosition(date, groups, inAllDayRow) {
    var _this19 = this;

    var cells = this._getCellsInViewport(inAllDayRow);

    var groupIndex = this._isGroupsSpecified(groups) ? this._getGroupIndexByResourceId(groups) : 0;
    var time = date.getTime();

    var trimmedTime = _date.default.trimTime(date).getTime();

    return cells.reduce(function (currentResult, cell) {
      var _this19$getCellData = _this19.getCellData(cell),
          cellStartDate = _this19$getCellData.startDate,
          cellEndDate = _this19$getCellData.endDate,
          cellGroupIndex = _this19$getCellData.groupIndex;

      var cellStartTime = cellStartDate.getTime();
      var cellEndTime = cellEndDate.getTime();

      if ((!inAllDayRow && cellStartTime <= time && time < cellEndTime || inAllDayRow && trimmedTime === cellStartTime) && groupIndex === cellGroupIndex) {
        return false;
      }

      return currentResult;
    }, true);
  };

  _proto2._getCellsInViewport = function _getCellsInViewport(inAllDayRow) {
    var $scrollable = this.getScrollable().$element();
    var cellHeight = this.getCellHeight();
    var cellWidth = this.getCellWidth();

    var totalColumnCount = this._getTotalCellCount(this._getGroupCount());

    var scrollableScrollTop = this.getScrollableScrollTop();
    var scrollableScrollLeft = this.getScrollableScrollLeft();
    var fullScrolledRowCount = scrollableScrollTop / cellHeight - this.virtualScrollingDispatcher.topVirtualRowsCount;
    var scrolledRowCount = Math.floor(fullScrolledRowCount);

    if (scrollableScrollTop % cellHeight !== 0) {
      scrolledRowCount += 1;
    } // TODO horizontal v-scrolling


    var fullScrolledColumnCount = scrollableScrollLeft / cellWidth;
    var scrolledColumnCount = Math.floor(fullScrolledColumnCount);

    if (scrollableScrollLeft % cellWidth !== 0) {
      scrolledColumnCount += 1;
    }

    var rowCount = Math.floor(fullScrolledRowCount + $scrollable.height() / cellHeight);
    var columnCount = Math.floor(fullScrolledColumnCount + $scrollable.width() / cellWidth);

    var $cells = this._getAllCells(inAllDayRow);

    var result = [];
    $cells.each(function (index) {
      var $cell = (0, _renderer.default)(this);
      var columnIndex = index % totalColumnCount;
      var rowIndex = index / totalColumnCount;

      if (scrolledColumnCount <= columnIndex && columnIndex < columnCount && scrolledRowCount <= rowIndex && rowIndex < rowCount) {
        result.push($cell);
      }
    });
    return result;
  };

  _proto2.getGroupWidth = function getGroupWidth(groupIndex) {
    var result = this._getCellCount() * this.getCellWidth(); // TODO: refactor after deleting old render

    if (this.isVirtualScrolling()) {
      var groupedData = this.viewDataProvider.groupedDataMap.dateTableGroupedMap;
      var groupLength = groupedData[groupIndex][0].length;
      result = groupLength * this.getCellWidth();
    }

    var position = this.getMaxAllowedPosition(groupIndex);
    var currentPosition = position[groupIndex];

    if (currentPosition) {
      if (this._isRTL()) {
        result = currentPosition - position[groupIndex + 1];
      } else {
        if (groupIndex === 0) {
          result = currentPosition;
        } else {
          result = currentPosition - position[groupIndex - 1];
        }
      }
    }

    return result;
  };

  _proto2.scrollToTime = function scrollToTime(hours, minutes, date) {
    if (!this._isValidScrollDate(date)) {
      return;
    }

    var coordinates = this._getScrollCoordinates(hours, minutes, date);

    var scrollable = this.getScrollable();
    scrollable.scrollBy({
      top: coordinates.top - scrollable.scrollTop(),
      left: 0
    });
  };

  _proto2.scrollTo = function scrollTo(date, groups) {
    var allDay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var throwWarning = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    if (!this._isValidScrollDate(date, throwWarning)) {
      return;
    }

    var groupIndex = this._getGroupCount() && groups ? this._getGroupIndexByResourceId(groups) : 0;
    var isScrollToAllDay = allDay && this.isAllDayPanelVisible;

    var coordinates = this._getScrollCoordinates(date.getHours(), date.getMinutes(), date, groupIndex, isScrollToAllDay);

    var scrollable = this.getScrollable();
    var $scrollable = scrollable.$element();
    var offset = this.option('rtlEnabled') ? this.getCellWidth() : 0;
    var scrollableHeight = $scrollable.height();
    var scrollableWidth = $scrollable.width();
    var cellWidth = this.getCellWidth();
    var cellHeight = this.getCellHeight();
    var xShift = (scrollableWidth - cellWidth) / 2;
    var yShift = (scrollableHeight - cellHeight) / 2;
    var left = coordinates.left - scrollable.scrollLeft() - xShift - offset;
    var top = coordinates.top - scrollable.scrollTop() - yShift;

    if (isScrollToAllDay && !this._isVerticalGroupedWorkSpace()) {
      top = 0;
    }

    if (this.option('templatesRenderAsynchronously')) {
      setTimeout(function () {
        scrollable.scrollBy({
          left: left,
          top: top
        });
      });
    } else {
      scrollable.scrollBy({
        left: left,
        top: top
      });
    }
  };

  _proto2._isValidScrollDate = function _isValidScrollDate(date) {
    var throwWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var min = this.getStartViewDate();
    var max = this.getEndViewDate();

    if (date < min || date > max) {
      throwWarning && _ui.default.log('W1008', date);
      return false;
    }

    return true;
  };

  _proto2.needApplyCollectorOffset = function needApplyCollectorOffset() {
    return false;
  };

  _proto2.initDragBehavior = function initDragBehavior(scheduler) {
    if (!this.dragBehavior && scheduler) {
      this.dragBehavior = new _appointmentDragBehavior.default(scheduler);

      this._createDragBehavior(this.getWorkArea());

      this._createDragBehavior(this.getAllDayContainer());

      this._createDragBehavior(this._$allDayPanel);
    }
  };

  _proto2._createDragBehavior = function _createDragBehavior($element) {
    var getItemData = function getItemData(itemElement, appointments) {
      return appointments._getItemData(itemElement);
    };

    var getItemSettings = function getItemSettings($itemElement) {
      return $itemElement.data(_constants.APPOINTMENT_SETTINGS_KEY);
    };

    var options = {
      getItemData: getItemData,
      getItemSettings: getItemSettings
    };

    this._createDragBehaviorBase($element, options);
  };

  _proto2._createDragBehaviorBase = function _createDragBehaviorBase($element, options) {
    var _this20 = this;

    var container = this.$element().find(".".concat(_classes.FIXED_CONTAINER_CLASS));
    var element = this.$element();

    var attachGeneralEvents = function attachGeneralEvents() {
      return _this20._attachDragEvents(element);
    };

    var detachGeneralEvents = function detachGeneralEvents() {
      return _this20._detachDragEvents(element);
    };

    var isDefaultDraggingMode = this.option('draggingMode') === 'default';
    this.dragBehavior.addTo($element, createDragBehaviorConfig(container, isDefaultDraggingMode, this.dragBehavior, attachGeneralEvents, detachGeneralEvents, function () {
      return _this20._getDroppableCell();
    }, function () {
      return _this20.removeDroppableCellClass();
    }, function () {
      return _this20.getCellWidth();
    }, options));
  };

  _proto2._isApplyCompactAppointmentOffset = function _isApplyCompactAppointmentOffset() {
    return this._supportCompactDropDownAppointments();
  };

  _proto2._supportCompactDropDownAppointments = function _supportCompactDropDownAppointments() {
    return true;
  };

  _proto2._formatWeekday = function _formatWeekday(date) {
    return formatWeekday(date);
  };

  _proto2._formatWeekdayAndDay = function _formatWeekdayAndDay(date) {
    return formatWeekday(date) + ' ' + _date2.default.format(date, 'day');
  };

  _proto2.removeDroppableCellClass = function removeDroppableCellClass($cellElement) {
    ($cellElement || this._getDroppableCell()).removeClass(DATE_TABLE_DROPPABLE_CELL_CLASS);
  };

  _proto2._getCoordinatesByCell = function _getCoordinatesByCell($cell) {
    var columnIndex = $cell.index() - this.virtualScrollingDispatcher.leftVirtualCellsCount;
    var rowIndex = $cell.parent().index();

    var isAllDayCell = this._hasAllDayClass($cell);

    var isVerticalGrouping = this._isVerticalGroupedWorkSpace();

    if (!(isAllDayCell && !isVerticalGrouping)) {
      rowIndex -= this.virtualScrollingDispatcher.topVirtualRowsCount;
    }

    return {
      rowIndex: rowIndex,
      columnIndex: columnIndex
    };
  };

  _proto2._isShowAllDayPanel = function _isShowAllDayPanel() {
    return this.option('showAllDayPanel');
  };

  _proto2.updateAppointments = function updateAppointments() {
    var _this$dragBehavior;

    this.invoke('renderAppointments');
    (_this$dragBehavior = this.dragBehavior) === null || _this$dragBehavior === void 0 ? void 0 : _this$dragBehavior.updateDragSource();
  };

  _proto2._getTimePanelCells = function _getTimePanelCells() {
    return this.$element().find(".".concat(TIME_PANEL_CELL_CLASS));
  };

  _proto2._getRDateTableProps = function _getRDateTableProps() {
    return {
      viewData: this.viewDataProvider.viewData,
      dataCellTemplate: this.option('dataCellTemplate'),
      addDateTableClass: !this.option('crossScrollingEnabled') || this.isVirtualScrolling(),
      groupOrientation: this.option('groupOrientation')
    };
  };

  _proto2._getTimeOffsetForStartViewDate = function _getTimeOffsetForStartViewDate() {
    var startViewDate = this.getStartViewDate();
    var startDayHour = Math.floor(this.option('startDayHour'));

    var isDSTChange = _utils.default.isTimezoneChangeInDate(startViewDate);

    if (isDSTChange && startDayHour !== startViewDate.getHours()) {
      return toMs('hour');
    }

    return 0;
  };

  _proto2._getFirstViewDateWithoutDST = function _getFirstViewDateWithoutDST() {
    var newFirstViewDate = _utils.default.getDateWithoutTimezoneChange(this._startViewDate);

    newFirstViewDate.setHours(this.option('startDayHour'));
    return newFirstViewDate;
  };

  _proto2._updateSelectedCellDataOption = function _updateSelectedCellDataOption(selectedCellData) {
    var correctedSelectedCellData = selectedCellData.map(function (_ref3) {
      var startDate = _ref3.startDate,
          endDate = _ref3.endDate,
          allDay = _ref3.allDay,
          groupIndex = _ref3.groupIndex,
          groups = _ref3.groups;
      return {
        startDate: startDate,
        endDate: endDate,
        allDay: allDay,
        groupIndex: groupIndex,
        groups: groups
      };
    });
    this.option('selectedCellData', correctedSelectedCellData);

    this._selectionChangedAction({
      selectedCellData: correctedSelectedCellData
    });
  };

  _proto2._getCellByData = function _getCellByData(cellData) {
    var startDate = cellData.startDate,
        groupIndex = cellData.groupIndex,
        allDay = cellData.allDay,
        index = cellData.index;
    var position = this.viewDataProvider.findCellPositionInMap({
      startDate: startDate,
      groupIndex: groupIndex,
      isAllDay: allDay,
      index: index
    });

    if (!position) {
      return undefined;
    }

    return allDay && !this._isVerticalGroupedWorkSpace() ? this._dom_getAllDayPanelCell(position.columnIndex) : this._dom_getDateCell(position);
  } // Must replace all DOM manipulations
  ;

  _proto2.getDOMElementsMetaData = function getDOMElementsMetaData() {
    var _this21 = this;

    return this.cache.get('cellElementsMeta', function () {
      var dateTableCells = _this21._getAllCells(false);

      var columnsCount = _this21.viewDataProvider.getColumnsCount();

      var dateTable = _this21._getDateTable(); // We should use getBoundingClientRect in renovation


      var dateTableRect = (0, _position.getBoundingRect)(dateTable.get(0));
      var dateTableCellsMeta = [];
      var allDayPanelCellsMeta = [];
      dateTableCells.each(function (index, cell) {
        var rowIndex = Math.floor(index / columnsCount);

        if (dateTableCellsMeta.length === rowIndex) {
          dateTableCellsMeta.push([]);
        }

        _this21._addCellMetaData(dateTableCellsMeta[rowIndex], cell, dateTableRect);
      });

      if (_this21.isAllDayPanelVisible && !_this21._isVerticalGroupedWorkSpace()) {
        var allDayCells = _this21._getAllCells(true);

        var allDayAppointmentContainer = _this21.getAllDayContainer();

        var allDayPanelRect = (0, _position.getBoundingRect)(allDayAppointmentContainer.get(0));
        allDayCells.each(function (_, cell) {
          _this21._addCellMetaData(allDayPanelCellsMeta, cell, allDayPanelRect);
        });
      }

      return {
        dateTableCellsMeta: dateTableCellsMeta,
        allDayPanelCellsMeta: allDayPanelCellsMeta
      };
    });
  };

  _proto2._addCellMetaData = function _addCellMetaData(cellMetaDataArray, cell, parentRect) {
    var cellRect = (0, _position.getBoundingRect)(cell);
    cellMetaDataArray.push({
      left: cellRect.left - parentRect.left,
      top: cellRect.top - parentRect.top,
      width: cellRect.width,
      height: cellRect.height
    });
  };

  _createClass(SchedulerWorkSpace, [{
    key: "viewDataProvider",
    get: function get() {
      if (!this._viewDataProvider) {
        this._viewDataProvider = new _view_data_provider.default();
      }

      return this._viewDataProvider;
    }
  }, {
    key: "cache",
    get: function get() {
      return _cache.cache;
    }
  }, {
    key: "cellsSelectionState",
    get: function get() {
      var _this22 = this;

      if (!this._cellsSelectionState) {
        this._cellsSelectionState = new _cells_selection_state.default(this.viewDataProvider);
        var selectedCellsOption = this.option('selectedCellData');

        if ((selectedCellsOption === null || selectedCellsOption === void 0 ? void 0 : selectedCellsOption.length) > 0) {
          var validSelectedCells = selectedCellsOption.map(function (selectedCell) {
            var groups = selectedCell.groups;

            if (!groups || _this22._getGroupCount() === 0) {
              return _extends({}, selectedCell, {
                groupIndex: 0
              });
            }

            var groupIndex = _this22._getGroupIndexByResourceId(groups);

            return _extends({}, selectedCell, {
              groupIndex: groupIndex
            });
          });

          this._cellsSelectionState.setSelectedCellsByData(validSelectedCells);
        }
      }

      return this._cellsSelectionState;
    }
  }, {
    key: "cellsSelectionController",
    get: function get() {
      if (!this._cellsSelectionController) {
        this._cellsSelectionController = new _cells_selection_controller.CellsSelectionController();
      }

      return this._cellsSelectionController;
    }
  }, {
    key: "isAllDayPanelVisible",
    get: function get() {
      return this._isShowAllDayPanel() && this.supportAllDayRow();
    }
  }, {
    key: "isDateAndTimeView",
    get: function get() {
      return true;
    }
  }, {
    key: "verticalGroupTableClass",
    get: function get() {
      return WORKSPACE_VERTICAL_GROUP_TABLE_CLASS;
    }
  }, {
    key: "viewDirection",
    get: function get() {
      return 'vertical';
    }
  }, {
    key: "renovatedHeaderPanelComponent",
    get: function get() {
      return _layout4.default;
    }
  }]);

  return SchedulerWorkSpace;
}(_widgetObserver.default);

var createDragBehaviorConfig = function createDragBehaviorConfig(container, isDefaultDraggingMode, dragBehavior, attachGeneralEvents, detachGeneralEvents, getDroppableCell, removeDroppableCellClass, getCellWidth, options) {
  var state = {
    dragElement: undefined,
    itemData: undefined
  };

  var createDragAppointment = function createDragAppointment(itemData, settings, appointments) {
    var appointmentIndex = appointments.option('items').length;
    settings.isCompact = false;
    settings.virtual = false;

    var items = appointments._renderItem(appointmentIndex, {
      itemData: itemData,
      settings: [settings]
    });

    return items[0];
  };

  var onDragStart = function onDragStart(e) {
    if (!isDefaultDraggingMode) {
      detachGeneralEvents();
    }

    var canceled = e.cancel;
    var event = e.event;
    var $itemElement = (0, _renderer.default)(e.itemElement);
    var appointments = e.component._appointments;
    state.itemData = options.getItemData(e.itemElement, appointments);
    var settings = options.getItemSettings($itemElement, e);
    var initialPosition = options.initialPosition;

    if (state.itemData && !state.itemData.disabled) {
      event.data = event.data || {};

      if (!canceled) {
        if (!settings.isCompact) {
          dragBehavior.updateDragSource(state.itemData, settings);
        }

        state.dragElement = createDragAppointment(state.itemData, settings, appointments);
        event.data.itemElement = state.dragElement;
        event.data.initialPosition = initialPosition !== null && initialPosition !== void 0 ? initialPosition : (0, _translator.locate)((0, _renderer.default)(state.dragElement));
        event.data.itemData = state.itemData;
        event.data.itemSettings = settings;
        dragBehavior.onDragStart(event.data);
        (0, _translator.resetPosition)((0, _renderer.default)(state.dragElement));
      }
    }
  };

  var onDragMove = function onDragMove() {
    if (isDefaultDraggingMode) {
      return;
    }

    var MOUSE_IDENT = 10;
    var appointmentWidth = (0, _renderer.default)(state.dragElement).width();
    var isWideAppointment = appointmentWidth > getCellWidth();
    var dragElementContainer = (0, _renderer.default)(state.dragElement).parent();
    var boundingRect = (0, _position.getBoundingRect)(dragElementContainer.get(0));
    var newX = boundingRect.left + MOUSE_IDENT;
    var newY = boundingRect.top + MOUSE_IDENT;
    var elements = isWideAppointment ? (0, _position.getElementsFromPoint)(newX, newY) : (0, _position.getElementsFromPoint)(newX + appointmentWidth / 2, newY);
    var droppableCell = elements.filter(function (el) {
      return el.className.indexOf(DATE_TABLE_CELL_CLASS) > -1 || el.className.indexOf(ALL_DAY_TABLE_CELL_CLASS) > -1;
    })[0];

    if (droppableCell) {
      var oldDroppableCell = getDroppableCell();

      if (!oldDroppableCell.is(droppableCell)) {
        removeDroppableCellClass();
      }

      (0, _renderer.default)(droppableCell).addClass(DATE_TABLE_DROPPABLE_CELL_CLASS);
    }
  };

  var onDragEnd = function onDragEnd(e) {
    var _state$dragElement;

    if (!isDefaultDraggingMode) {
      attachGeneralEvents();
    }

    if (state.itemData && !state.itemData.disabled) {
      dragBehavior.onDragEnd(e);
    }

    (_state$dragElement = state.dragElement) === null || _state$dragElement === void 0 ? void 0 : _state$dragElement.remove();
    removeDroppableCellClass();
  };

  var cursorOffset = options.isSetCursorOffset ? function () {
    var $dragElement = (0, _renderer.default)(state.dragElement);
    return {
      x: $dragElement.width() / 2,
      y: $dragElement.height() / 2
    };
  } : undefined;
  return {
    container: container,
    dragTemplate: function dragTemplate() {
      return state.dragElement;
    },
    onDragStart: onDragStart,
    onDragMove: onDragMove,
    onDragEnd: onDragEnd,
    cursorOffset: cursorOffset,
    filter: options.filter
  };
};

var _default = SchedulerWorkSpace;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;