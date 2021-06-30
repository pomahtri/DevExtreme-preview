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
const sass = __importStar(require("sass"));
const less_1 = __importDefault(require("less"));
const fs_1 = require("fs");
const bootstrap_metadata_1 = __importDefault(require("../data/bootstrap-metadata/bootstrap-metadata"));
const bootstrap4_metadata_1 = __importDefault(require("../data/bootstrap-metadata/bootstrap4-metadata"));
class BootstrapExtractor {
    constructor(source, version) {
        this.input = source;
        if (version === 3) {
            this.compiler = BootstrapExtractor.lessRender;
            this.sourceProcessor = this.lessProcessor;
            this.meta = bootstrap_metadata_1.default;
        }
        else {
            this.compiler = BootstrapExtractor.sassRender;
            this.sourceProcessor = this.sassProcessor;
            this.meta = bootstrap4_metadata_1.default;
        }
    }
    static readSassFile(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = require.resolve(`bootstrap/scss/${fileName}`);
            return fs_1.promises.readFile(path, 'utf8');
        });
    }
    static sassRender(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                sass.render({ data: input }, (error, result) => (error ? reject(error.message) : resolve(result.css.toString())));
            });
        });
    }
    static lessRender(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                less_1.default.render(input, (error, result) => (error ? reject(error.message) : resolve(result.css)));
            });
        });
    }
    static convertRemToPx(cssValue) {
        const remValueRegex = /(\d*?\.?\d+?)rem([;\s])?/g;
        const replaceHandler = (_match, value, separator) => {
            const pixelsInRem = 16;
            const pxValue = Math.round(parseFloat(value) * pixelsInRem);
            return `${pxValue}px${separator || ''}`;
        };
        return cssValue.replace(remValueRegex, replaceHandler);
    }
    sassProcessor() {
        return __awaiter(this, void 0, void 0, function* () {
            const functions = yield BootstrapExtractor.readSassFile('_functions.scss');
            const variables = yield BootstrapExtractor.readSassFile('_variables.scss');
            return functions
                + this.input
                + variables
                + this.getSetterServiceCode('!default')
                + this.getCollectorServiceCode();
        });
    }
    lessProcessor() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(this.getSetterServiceCode()
                + this.input
                + this.getCollectorServiceCode());
        });
    }
    getSetterServiceCode(postfix = '') {
        return Object.keys(this.meta)
            .map((key) => `${this.meta[key]}: dx-empty ${postfix};\n`)
            .join('');
    }
    getCollectorServiceCode() {
        const variables = Object.keys(this.meta)
            .map((key) => `${key}: ${this.meta[key]};`)
            .join('');
        return `dx-varibles-collector {${variables}}`;
    }
    extract() {
        return __awaiter(this, void 0, void 0, function* () {
            const css = yield this.compiler(yield this.sourceProcessor());
            const serviceCodeRegex = /dx-varibles-collector\s{([\s\S]*)}/;
            const ruleRegex = /([\w-]*):\s(.*);/g;
            const serviceCode = serviceCodeRegex.exec(css)[1];
            const result = [];
            let match = ruleRegex.exec(serviceCode);
            while (match !== null) {
                const key = `$${match[1]}`;
                const valueMatch = match[2];
                if (valueMatch !== 'dx-empty') {
                    const value = BootstrapExtractor.convertRemToPx(valueMatch);
                    result.push({ key, value });
                }
                match = ruleRegex.exec(serviceCode);
            }
            return result;
        });
    }
}
exports.default = BootstrapExtractor;