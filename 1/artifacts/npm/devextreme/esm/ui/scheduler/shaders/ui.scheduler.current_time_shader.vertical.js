/**
* DevExtreme (esm/ui/scheduler/shaders/ui.scheduler.current_time_shader.vertical.js)
* Version: 21.2.0
* Build date: Tue Jun 29 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import $ from '../../../core/renderer';
import CurrentTimeShader from '../shaders/ui.scheduler.current_time_shader';
var DATE_TIME_SHADER_ALL_DAY_CLASS = 'dx-scheduler-date-time-shader-all-day';
var DATE_TIME_SHADER_TOP_CLASS = 'dx-scheduler-date-time-shader-top';
var DATE_TIME_SHADER_BOTTOM_CLASS = 'dx-scheduler-date-time-shader-bottom';

class VerticalCurrentTimeShader extends CurrentTimeShader {
  renderShader() {
    var shaderHeight = this._getShaderHeight();

    var maxHeight = this._getShaderMaxHeight();

    var isSolidShader = shaderHeight > maxHeight;

    if (shaderHeight > maxHeight) {
      shaderHeight = maxHeight;
    }

    this._$shader.height(shaderHeight);

    var groupCount = this._workSpace._getGroupCount() || 1;

    if (this._workSpace.isGroupedByDate()) {
      this._renderGroupedByDateShaderParts(groupCount, shaderHeight, maxHeight, isSolidShader);
    } else {
      this._renderShaderParts(groupCount, shaderHeight, maxHeight, isSolidShader);
    }
  }

  _renderShaderParts(groupCount, shaderHeight, maxHeight, isSolidShader) {
    for (var i = 0; i < groupCount; i++) {
      var shaderWidth = this._getShaderWidth(i);

      this._renderTopShader(this._$shader, shaderHeight, shaderWidth, i);

      !isSolidShader && this._renderBottomShader(this._$shader, maxHeight, shaderHeight, shaderWidth, i);

      this._renderAllDayShader(shaderWidth, i);
    }
  }

  _renderGroupedByDateShaderParts(groupCount, shaderHeight, maxHeight, isSolidShader) {
    var shaderWidth = this._getShaderWidth(0);

    var bottomShaderWidth = shaderWidth - this._workSpace.getCellWidth();

    if (shaderHeight < 0) {
      shaderHeight = 0;
      bottomShaderWidth = shaderWidth;
    }

    this._renderTopShader(this._$shader, shaderHeight, shaderWidth * groupCount, 0);

    !isSolidShader && this._renderBottomShader(this._$shader, maxHeight, shaderHeight, bottomShaderWidth * groupCount + this._workSpace.getCellWidth(), 0);

    this._renderAllDayShader(shaderWidth * groupCount, 0);
  }

  _renderTopShader($shader, height, width, i) {
    this._$topShader = $('<div>').addClass(DATE_TIME_SHADER_TOP_CLASS);
    width && this._$topShader.width(width) && this._$topShader.height(height);

    this._$topShader.css('marginTop', this._getShaderTopOffset(i));

    this._$topShader.css('left', this._getShaderOffset(i, width));

    $shader.append(this._$topShader);
  }

  _renderBottomShader($shader, maxHeight, height, width, i) {
    this._$bottomShader = $('<div>').addClass(DATE_TIME_SHADER_BOTTOM_CLASS);
    var shaderWidth = height < 0 ? width : width - this._workSpace.getCellWidth();
    var shaderHeight = height < 0 ? maxHeight : maxHeight - height;
    this._$bottomShader.width(shaderWidth) && this._$bottomShader.height(shaderHeight);

    this._$bottomShader.css('left', this._getShaderOffset(i, width - this._workSpace.getCellWidth()));

    $shader.append(this._$bottomShader);
  }

  _renderAllDayShader(shaderWidth, i) {
    if (this._workSpace.option('showAllDayPanel')) {
      this._$allDayIndicator = $('<div>').addClass(DATE_TIME_SHADER_ALL_DAY_CLASS);

      this._$allDayIndicator.height(this._workSpace.getAllDayHeight());

      this._$allDayIndicator.width(shaderWidth);

      this._$allDayIndicator.css('left', this._getShaderOffset(i, shaderWidth));

      this._workSpace._$allDayPanel.prepend(this._$allDayIndicator);
    }
  }

  _getShaderOffset(i, width) {
    return this._workSpace.getGroupedStrategy().getShaderOffset(i, width);
  }

  _getShaderTopOffset(i) {
    return this._workSpace.getGroupedStrategy().getShaderTopOffset(i);
  }

  _getShaderHeight(i, width) {
    return this._workSpace.getGroupedStrategy().getShaderHeight();
  }

  _getShaderMaxHeight(i, width) {
    return this._workSpace.getGroupedStrategy().getShaderMaxHeight();
  }

  _getShaderWidth(i) {
    return this._workSpace.getGroupedStrategy().getShaderWidth(i);
  }

  clean() {
    super.clean();
    this._workSpace && this._workSpace._$allDayPanel && this._workSpace._$allDayPanel.find('.' + DATE_TIME_SHADER_ALL_DAY_CLASS).remove();
  }

}

export default VerticalCurrentTimeShader;
