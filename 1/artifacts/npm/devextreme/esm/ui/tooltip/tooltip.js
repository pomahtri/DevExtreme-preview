/**
* DevExtreme (esm/ui/tooltip/tooltip.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import $ from '../../core/renderer';
import Guid from '../../core/guid';
import registerComponent from '../../core/component_registrator';
import { extend } from '../../core/utils/extend';
import Popover from '../popover';
var TOOLTIP_CLASS = 'dx-tooltip';
var TOOLTIP_WRAPPER_CLASS = 'dx-tooltip-wrapper';
import { isWindow } from '../../core/utils/type'; // STYLE tooltip

var Tooltip = Popover.inherit({
  _getDefaultOptions: function _getDefaultOptions() {
    return extend(this.callBase(), {
      /**
      * @name dxTooltipOptions.toolbarItems
      * @hidden
      */
      toolbarItems: [],

      /**
      * @name dxTooltipOptions.showCloseButton
      * @hidden
      */
      showCloseButton: false,

      /**
      * @name dxTooltipOptions.showTitle
      * @hidden
      */
      showTitle: false,

      /**
      * @name dxTooltipOptions.title
      * @hidden
      */
      title: null,

      /**
      * @name dxTooltipOptions.titleTemplate
      * @hidden
      */
      titleTemplate: null,

      /**
      * @name dxTooltipOptions.onTitleRendered
      * @hidden
      * @action
      */
      onTitleRendered: null,
      bottomTemplate: null,
      propagateOutsideClick: true
    });
  },
  _render: function _render() {
    this.$element().addClass(TOOLTIP_CLASS);
    this.$wrapper().addClass(TOOLTIP_WRAPPER_CLASS);
    this.callBase();
  },
  _renderContent: function _renderContent() {
    this.callBase();
    this._contentId = 'dx-' + new Guid();
    this.$overlayContent().attr({
      'id': this._contentId,
      'role': 'tooltip'
    });

    this._toggleAriaDescription(true);
  },
  _toggleAriaDescription: function _toggleAriaDescription(showing) {
    var $target = $(this.option('target'));
    var label = showing ? this._contentId : undefined;

    if (!isWindow($target.get(0))) {
      this.setAria('describedby', label, $target);
    }
  }
});
registerComponent('dxTooltip', Tooltip);
export default Tooltip;
