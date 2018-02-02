import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';

declare let global: {
    window: JSDOM;
    localStorage: Object;
    document: Document;
};

Enzyme.configure({adapter: new Adapter()});

//  注入全局变量
const { window } = new JSDOM();
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
