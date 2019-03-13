/* eslint-disable */

// include jsdom for DOM use in tests on travis
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(``);
global.window = window;
global.document = window.document;

global.firebase = require('firebase');

require = require('esm')(module);
module.exports = require("./tests.js"); 