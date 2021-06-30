"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeExternalResources = exports.fixSwatchCss = exports.autoPrefix = exports.cleanCss = exports.addInfoHeader = exports.addBasePath = void 0;
const clean_css_1 = __importDefault(require("clean-css"));
const autoprefixer_1 = __importDefault(require("autoprefixer"));
const postcss_1 = __importDefault(require("postcss"));
const clean_css_options_json_1 = __importDefault(require("../data/clean-css-options.json"));
// eslint-disable-next-line import/extensions
const dx_theme_builder_metadata_1 = require("../data/metadata/dx-theme-builder-metadata");
function addBasePath(css, basePath) {
    const normalizedPath = `${basePath.replace(/[/\\]$/, '')}/`;
    return css.toString().replace(/(url\()("|')?(icons|fonts)/g, `$1$2${normalizedPath}$3`);
}
exports.addBasePath = addBasePath;
function addInfoHeader(css, version, isDartCompiler) {
    const generatedBy = '* Generated by the DevExpress ThemeBuilder';
    const dartPostfix = isDartCompiler ? ' (dart)' : '';
    const versionString = `* Version: ${version}`;
    const link = '* http://js.devexpress.com/ThemeBuilder/';
    const header = `/*${generatedBy}${dartPostfix}\n${versionString}\n${link}\n*/\n\n`;
    const source = css.toString();
    const encoding = '@charset "UTF-8";';
    if (source.startsWith(encoding)) {
        return `${encoding}\n${header}${source.replace(`${encoding}\n`, '')}`;
    }
    return `${header}${css}`;
}
exports.addInfoHeader = addInfoHeader;
function cleanCss(css) {
    return __awaiter(this, void 0, void 0, function* () {
        const promiseOptions = { returnPromise: true };
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        const options = Object.assign(Object.assign({}, clean_css_options_json_1.default), promiseOptions);
        const cleaner = new clean_css_1.default(options);
        return (yield cleaner.minify(css)).styles;
    });
}
exports.cleanCss = cleanCss;
function autoPrefix(css) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield postcss_1.default(autoprefixer_1.default({
            overrideBrowserslist: dx_theme_builder_metadata_1.browsersList,
        })).process(css, {
            from: undefined,
        })).css;
    });
}
exports.autoPrefix = autoPrefix;
function fixSwatchCss(css, swatchClass, colorScheme) {
    let result = css.toString();
    const escapedSelector = swatchClass.replace('.', '\\.');
    const swatchOrderRegex = new RegExp(`([ \\t]*)([\\w\\.#:\\*][\\w\\.#:\\*\\->()\\s]*)(${escapedSelector}\\s)([^,{+~]*)`, 'gm');
    const changeTypographyRulesOrderRegex = /(\.dx-swatch-.*?)\s(\.dx-theme-.*?-typography)(.*?)(\s{|,)/g;
    const themeMarkerRegex = /(\.dx-theme-marker\s*{\s*font-family:\s*['"]dx\..*?\.)(.*)(['"])/g;
    result = result
        .replace(swatchOrderRegex, '$1$3$2$4')
        .replace(changeTypographyRulesOrderRegex, '$2 $1$3,$2$1$3$4')
        .replace(themeMarkerRegex, `$1${colorScheme}$3`);
    return result;
}
exports.fixSwatchCss = fixSwatchCss;
function removeExternalResources(css) {
    const fontRegex = /^\s*@import\surl\(.*googleapis.*\);[\n\r]{0,2}/gmi;
    return css.replace(fontRegex, '');
}
exports.removeExternalResources = removeExternalResources;
