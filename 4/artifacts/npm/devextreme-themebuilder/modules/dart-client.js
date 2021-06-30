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
const net_1 = __importDefault(require("net"));
const logger_1 = require("./logger");
class DartClient {
    constructor() {
        this.serverPort = 22000;
        this.isServerAvailable = false;
        this.client = new net_1.default.Socket();
        this.eventListeners = [];
    }
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.client.destroyed)
                return Promise.resolve();
            this.isServerAvailable = false;
            return new Promise((resolve) => {
                this.client.once('close', resolve);
                this.removeClientEventListeners();
                this.client.destroy();
            });
        });
    }
    check() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client.setTimeout(100);
            return new Promise((resolve) => {
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                this.setClientErrorHandlers(() => __awaiter(this, void 0, void 0, function* () {
                    this.isServerAvailable = false;
                    yield this.dispose();
                    resolve();
                }));
                this.client.connect(this.serverPort, '127.0.0.1', () => {
                    this.isServerAvailable = true;
                    resolve();
                });
            });
        });
    }
    send(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this.client.setTimeout(0);
            this.removeClientEventListeners();
            return new Promise((resolve) => {
                let data = '';
                this.addClientEventListener('data', (d) => {
                    data += d.toString();
                });
                this.addClientEventListener('end', () => {
                    logger_1.log('DartClient received', data);
                    try {
                        resolve(JSON.parse(data));
                    }
                    catch (e) {
                        resolve({ error: `Unable to parse dart server response: ${data}` });
                    }
                });
                const errorHandler = (e) => {
                    logger_1.log('Dart client error on write', e);
                    this.client.end();
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    this.dispose();
                    resolve({
                        error: `${e.name}: ${e.message}`,
                    });
                };
                if (this.client.destroyed) {
                    errorHandler({ name: 'Error', message: 'Client destroyed' });
                }
                this.setClientErrorHandlers(errorHandler);
                logger_1.log('DartClient send', message);
                this.client.write(JSON.stringify(message));
                this.client.end();
            });
        });
    }
    addClientEventListener(name, handler) {
        this.eventListeners.push({ name, handler });
        this.client.on(name, handler);
    }
    setClientErrorHandlers(handler) {
        this.addClientEventListener('timeout', handler);
        this.addClientEventListener('error', handler);
    }
    removeClientEventListeners() {
        this.eventListeners.forEach((listener) => {
            this.client.off(listener.name, listener.handler);
        });
        this.eventListeners.length = 0;
    }
}
exports.default = DartClient;
