/**
* DevExtreme (esm/ui/scheduler/base/widgetObserver.js)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import Widget from '../../widget/ui.widget';

class WidgetObserver extends Widget {
  notifyObserver(subject, args) {
    var observer = this.option('observer');

    if (observer) {
      observer.fire(subject, args);
    }
  }

  invoke() {
    var observer = this.option('observer');

    if (observer) {
      return observer.fire.apply(observer, arguments);
    }
  }

}

export default WidgetObserver;