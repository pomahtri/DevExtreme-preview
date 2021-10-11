/**
* DevExtreme (esm/ui/hierarchical_collection/ui.hierarchical_collection_widget.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import $ from '../../core/renderer';
import { compileGetter, compileSetter } from '../../core/utils/data';
import { extend } from '../../core/utils/extend';
import { each } from '../../core/utils/iterator';
import devices from '../../core/devices';
import { getImageContainer } from '../../core/utils/icon';
import HierarchicalDataAdapter from './ui.data_adapter';
import CollectionWidget from '../collection/ui.collection_widget.edit';
import { BindableTemplate } from '../../core/templates/bindable_template';
import { isFunction } from '../../core/utils/type';
import { noop } from '../../core/utils/common';
var DISABLED_STATE_CLASS = 'dx-state-disabled';
var HierarchicalCollectionWidget = CollectionWidget.inherit({
  _getDefaultOptions: function _getDefaultOptions() {
    return extend(this.callBase(), {
      keyExpr: 'id',
      displayExpr: 'text',
      selectedExpr: 'selected',
      disabledExpr: 'disabled',
      itemsExpr: 'items',
      hoverStateEnabled: true,
      parentIdExpr: 'parentId',
      expandedExpr: 'expanded'
    });
  },
  _defaultOptionsRules: function _defaultOptionsRules() {
    return this.callBase().concat([{
      device: function device() {
        return devices.real().deviceType === 'desktop' && !devices.isSimulator();
      },
      options: {
        focusStateEnabled: true
      }
    }]);
  },
  _init: function _init() {
    this.callBase();

    this._initAccessors();

    this._initDataAdapter();

    this._initDynamicTemplates();
  },
  _initDataSource: function _initDataSource() {
    this.callBase();
    this._dataSource && this._dataSource.paginate(false);
  },
  _initDataAdapter: function _initDataAdapter() {
    var accessors = this._createDataAdapterAccessors();

    this._dataAdapter = new HierarchicalDataAdapter(extend({
      dataAccessors: {
        getters: accessors.getters,
        setters: accessors.setters
      },
      items: this.option('items')
    }, this._getDataAdapterOptions()));
  },
  _getDataAdapterOptions: noop,
  _initDynamicTemplates: function _initDynamicTemplates() {
    var that = this;

    this._templateManager.addDefaultTemplates({
      item: new BindableTemplate(function ($container, itemData) {
        $container.html(itemData.html).append(this._getIconContainer(itemData)).append(this._getTextContainer(itemData)).append(this._getPopoutContainer(itemData));

        that._addContentClasses(itemData, $container.parent());
      }.bind(this), ['text', 'html', 'items', 'icon'], this.option('integrationOptions.watchMethod'), {
        'text': this._displayGetter,
        'items': this._itemsGetter
      })
    });
  },
  _getIconContainer: function _getIconContainer(itemData) {
    return itemData.icon ? getImageContainer(itemData.icon) : undefined;
  },
  _getTextContainer: function _getTextContainer(itemData) {
    return $('<span>').text(itemData.text);
  },
  _getPopoutContainer: noop,
  _addContentClasses: noop,
  _initAccessors: function _initAccessors() {
    var that = this;
    each(this._getAccessors(), function (_, accessor) {
      that._compileAccessor(accessor);
    });

    this._compileDisplayGetter();
  },
  _getAccessors: function _getAccessors() {
    return ['key', 'selected', 'items', 'disabled', 'parentId', 'expanded'];
  },
  _getChildNodes: function _getChildNodes(node) {
    var that = this;
    var arr = [];
    each(node.internalFields.childrenKeys, function (_, key) {
      var childNode = that._dataAdapter.getNodeByKey(key);

      arr.push(childNode);
    });
    return arr;
  },
  _hasChildren: function _hasChildren(node) {
    return node && node.internalFields.childrenKeys.length;
  },
  _compileAccessor: function _compileAccessor(optionName) {
    var getter = '_' + optionName + 'Getter';
    var setter = '_' + optionName + 'Setter';
    var optionExpr = this.option(optionName + 'Expr');

    if (!optionExpr) {
      this[getter] = noop;
      this[setter] = noop;
      return;
    } else if (isFunction(optionExpr)) {
      this[setter] = function (obj, value) {
        obj[optionExpr()] = value;
      };

      this[getter] = function (obj) {
        return obj[optionExpr()];
      };

      return;
    }

    this[getter] = compileGetter(optionExpr);
    this[setter] = compileSetter(optionExpr);
  },
  _createDataAdapterAccessors: function _createDataAdapterAccessors() {
    var that = this;
    var accessors = {
      getters: {},
      setters: {}
    };
    each(this._getAccessors(), function (_, accessor) {
      var getterName = '_' + accessor + 'Getter';
      var setterName = '_' + accessor + 'Setter';
      var newAccessor = accessor === 'parentId' ? 'parentKey' : accessor;
      accessors.getters[newAccessor] = that[getterName];
      accessors.setters[newAccessor] = that[setterName];
    });
    accessors.getters['display'] = !this._displayGetter ? itemData => itemData.text : this._displayGetter;
    return accessors;
  },
  _initMarkup: function _initMarkup() {
    this.callBase();

    this._addWidgetClass();
  },
  _addWidgetClass: function _addWidgetClass() {
    this._focusTarget().addClass(this._widgetClass());
  },
  _widgetClass: noop,
  _renderItemFrame: function _renderItemFrame(index, itemData) {
    var $itemFrame = this.callBase.apply(this, arguments);
    $itemFrame.toggleClass(DISABLED_STATE_CLASS, !!this._disabledGetter(itemData));
    return $itemFrame;
  },
  _optionChanged: function _optionChanged(args) {
    switch (args.name) {
      case 'displayExpr':
      case 'keyExpr':
        this._initAccessors();

        this._initDynamicTemplates();

        this.repaint();
        break;

      case 'itemsExpr':
      case 'selectedExpr':
      case 'disabledExpr':
      case 'expandedExpr':
      case 'parentIdExpr':
        this._initAccessors();

        this._initDataAdapter();

        this.repaint();
        break;

      case 'items':
        this._initDataAdapter();

        this.callBase(args);
        break;

      default:
        this.callBase(args);
    }
  }
});
export default HierarchicalCollectionWidget;