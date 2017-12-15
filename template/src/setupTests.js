"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("raf/polyfill");
var enzyme_adapter_react_16_1 = require("enzyme-adapter-react-16");
var jsdom_1 = require("jsdom");
var enzyme_1 = require("enzyme");
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
//  注入全局变量
var window = new jsdom_1.JSDOM().window;
global.document = window.document;
global.localStorage = {
    getItem: function (key) {
        return this[key] || null;
    },
    setItem: function (key, value) {
        this[key] = value;
    },
    removeItem: function (key) {
        delete this[key];
    }
};
