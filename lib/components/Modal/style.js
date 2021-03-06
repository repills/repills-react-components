'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.body = exports.header = exports.content = exports.modal = exports.wrapper = exports.overlay = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n z-index: ', ';\n'], ['\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n z-index: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity .3s ease-in-out;\n  \n  visibility: ', ';\n  opacity: ', '\n'], ['\n  ', '\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity .3s ease-in-out;\n  \n  visibility: ', ';\n  opacity: ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  background-color: ', ';\n  \n  ', '\n  z-index: 1;\n'], ['\n  ', '\n  background-color: ', ';\n  \n  ', '\n  z-index: 1;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  padding: ', ';\n  max-width: ', ';\n  flex: 0 0 100%;\n'], ['\n  box-sizing: border-box;\n  padding: ', ';\n  max-width: ', ';\n  flex: 0 0 100%;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n box-sizing: border-box;\n position: relative;\n width: 100%;\n z-index: 2;\n'], ['\n box-sizing: border-box;\n position: relative;\n width: 100%;\n z-index: 2;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n'], ['\n  display: flex;\n  flex-direction: column;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  padding-bottom: ', ';\n  height: ', ';\n  display: flex;\n  justify-content: flex-end;\n  border-bottom: 1px solid ', ';\n'], ['\n  padding-bottom: ', ';\n  height: ', ';\n  display: flex;\n  justify-content: flex-end;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  box-sizing: border-box;\n  max-height: calc(100vh - ', ');\n  overflow-y: auto;\n  margin: 0 auto;\n  width: 100%;\n'], ['\n  background-color: ', ';\n  box-sizing: border-box;\n  max-height: calc(100vh - ', ');\n  overflow-y: auto;\n  margin: 0 auto;\n  width: 100%;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  ', '\n  box-sizing: border-box;\n  color: ', ';\n  background-color: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n'], ['\n  ', '\n  box-sizing: border-box;\n  color: ', ';\n  background-color: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;


var sizes = {
  S: (0, _utils.extRem)(500),
  M: (0, _utils.extRem)(700),
  L: (0, _utils.extRem)(900)
};

var fixedPosition = (0, _styledComponents.css)(_templateObject, _theme2.default.zIndex.modal);

var base = exports.base = (0, _styledComponents.css)(_templateObject2, fixedPosition, function (props) {
  return props.open ? 'visible' : 'hidden';
}, function (props) {
  return props.open ? 1 : 0;
});

var overlay = exports.overlay = (0, _styledComponents.css)(_templateObject3, fixedPosition, (0, _polished.rgba)(neutral.high, .4), function (props) {
  return props.closeOnClick && '\n    cursor: pointer;\n  ';
});

var wrapper = exports.wrapper = (0, _styledComponents.css)(_templateObject4, (0, _utils.extRem)(0, 12), function (props) {
  return sizes[props.size];
});

var modal = exports.modal = (0, _styledComponents.css)(_templateObject5);

var content = exports.content = (0, _styledComponents.css)(_templateObject6);

var header = exports.header = (0, _styledComponents.css)(_templateObject7, (0, _utils.extRem)(12), (0, _utils.extRem)(40), neutral.low);

var body = exports.body = (0, _styledComponents.css)(_templateObject8, neutral.lowest, (0, _utils.extRem)(180));

var close = exports.close = (0, _styledComponents.css)(_templateObject9, (0, _polished.size)((0, _utils.extRem)(40)), neutral.higher, neutral.lower);