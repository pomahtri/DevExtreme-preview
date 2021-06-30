"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.ImportType = void 0;
const sass = __importStar(require("sass"));
// eslint-disable-next-line import/extensions
const dx_theme_builder_metadata_1 = require("../data/metadata/dx-theme-builder-metadata");
const dart_client_1 = __importDefault(require("./dart-client"));
var ImportType;
(function (ImportType) {
    ImportType[ImportType["Index"] = 0] = "Index";
    ImportType[ImportType["Color"] = 1] = "Color";
    ImportType[ImportType["Unknown"] = 2] = "Unknown";
})(ImportType = exports.ImportType || (exports.ImportType = {}));
class Compiler {
    constructor() {
        this.changedVariables = {};
        this.importerCache = {};
        this.meta = dx_theme_builder_metadata_1.metadata;
        this.userItems = [];
        this.dartClient = new dart_client_1.default();
    }
    static getImportType(url) {
        if (url.endsWith('tb_index'))
            return ImportType.Index;
        if (url.startsWith('tb_'))
            return ImportType.Color;
        return ImportType.Unknown;
    }
    compile(items, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.changedVariables = {};
            this.userItems = items || [];
            let compilerOptions = {
                importer: this.setter.bind(this),
                functions: {
                    'collector($map)': this.collector.bind(this),
                },
            };
            compilerOptions = Object.assign(Object.assign({}, compilerOptions), options);
            yield this.dartClient.check();
            return new Promise((resolve, reject) => {
                const compiler = this.dartClient.isServerAvailable
                    ? this.dartCompiler
                    : this.nodeCompiler;
                compiler.bind(this)(compilerOptions, resolve, reject);
            });
        });
    }
    dartCompiler(options, resolve, reject) {
        this.dartClient.send({
            items: this.userItems,
            index: this.indexFileContent,
            file: options.file,
            data: options.data,
        }).then((reply) => {
            if (reply.error) {
                reject({
                    message: reply.error,
                    line: null,
                    file: null,
                    name: null,
                    column: null,
                    status: null,
                });
            }
            else {
                resolve({
                    result: {
                        css: Buffer.from(reply.css),
                        map: null,
                        stats: null,
                    },
                    changedVariables: reply.changedVariables,
                });
            }
        }).finally(() => {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.dartClient.dispose();
        });
    }
    nodeCompiler(options, resolve, reject) {
        sass.render(options, (error, result) => {
            this.importerCache = {};
            if (error)
                reject(error);
            else {
                resolve({
                    result,
                    changedVariables: this.changedVariables,
                });
            }
        });
    }
    getMatchingUserItemsAsString(theme) {
        const meta = theme === 'generic' ? this.meta.generic : this.meta.material;
        const themeKeys = meta.map((item) => item.Key);
        return this.userItems
            .filter((item) => themeKeys.includes(item.key))
            .map((item) => `${item.key}: ${item.value};`)
            .join('');
    }
    setter(url) {
        const importType = Compiler.getImportType(url);
        if (importType === ImportType.Unknown) {
            return null;
        }
        let content = this.importerCache[url];
        if (!content) {
            content = importType === ImportType.Index
                ? this.indexFileContent
                : this.getMatchingUserItemsAsString(url.replace('tb_', ''));
            this.importerCache[url] = content;
        }
        return { contents: content };
    }
    collector(map) {
        for (let mapIndex = 0; mapIndex < map.getLength(); mapIndex += 1) {
            const keyMap = map.getKey(mapIndex);
            if (keyMap instanceof sass.types.String) {
                const variableKey = keyMap.getValue();
                const variableValue = map.getValue(mapIndex).toString();
                // eslint-disable-next-line no-continue
                if (variableValue === 'null')
                    continue;
                this.changedVariables[variableKey] = variableValue;
            }
        }
        return sass.types.Null.NULL;
    }
}
exports.default = Compiler;
