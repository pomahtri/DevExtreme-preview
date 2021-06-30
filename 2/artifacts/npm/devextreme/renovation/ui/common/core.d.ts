/**
* DevExtreme (renovation/ui/common/core.d.ts)
* Version: 21.2.0
* Build date: Wed Jun 30 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
/* eslint-disable @typescript-eslint/method-signature-style */

import '../../../core/component';

declare module '../../../core/component' {
  interface Component<TProperties> { // eslint-disable-line @typescript-eslint/no-unused-vars
    _optionsByReference: Record<string, any>;
    _deprecatedOptions: Record<string, any>;
    _options: {
      silent(path: any, value: any): void;
    };
    _createActionByOption(optionName: string, config: Record<string, any>): (
      (...args: any[]) => any
    );
    _dispose(): void;
    _getDefaultOptions(): Record<string, any>;
    _init(): void;
    _initializeComponent(): void;
    _optionChanging(name: string, value: unknown, prevValue: unknown): void;
    _optionChanged(args: { name: string; value: unknown }): void;
    _setOptionsByReference(): void;
    _setDeprecatedOptions(): void;
  }
}
