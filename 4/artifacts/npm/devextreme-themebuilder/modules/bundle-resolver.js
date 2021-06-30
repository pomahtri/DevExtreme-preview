"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.default = (theme, colorScheme) => {
    const dottedColorScheme = colorScheme.replace(/-/g, '.');
    const themePart = theme !== 'generic' ? `${theme}.` : '';
    const basePath = path_1.resolve(path_1.join(__dirname, '..', 'data', 'scss'));
    const bundlePath = path_1.join(basePath, 'bundles', `dx.${themePart}${dottedColorScheme}.scss`);
    const indexPath = path_1.join(basePath, 'widgets', theme);
    return {
        file: bundlePath,
        includePaths: [indexPath],
    };
};
