/**
* DevExtreme (esm/ui/nav_bar/item.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import TabsItem from '../tabs/item';
var TABS_ITEM_BADGE_CLASS = 'dx-tabs-item-badge';
var NAVBAR_ITEM_BADGE_CLASS = 'dx-navbar-item-badge';
var NavBarItem = TabsItem.inherit({
  _renderBadge: function _renderBadge(badge) {
    this.callBase(badge);

    this._$element.children('.' + TABS_ITEM_BADGE_CLASS).removeClass(TABS_ITEM_BADGE_CLASS).addClass(NAVBAR_ITEM_BADGE_CLASS);
  }
});
export default NavBarItem;