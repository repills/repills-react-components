'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abstract = exports.date = exports.type = exports.detail = exports.secondaryInfo = exports.title = exports.author = exports.source = exports.mainInfo = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  background-color: ', ';\n  border-bottom: 1px solid ', ';\n  border-radius: 5px;\n  height: 100%;\n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n'], ['\n  text-align: left;\n  background-color: ', ';\n  border-bottom: 1px solid ', ';\n  border-radius: 5px;\n  height: 100%;\n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: ', ';\n  border-bottom: 0;\n  display: block;\n  text-decoration: none;\n  color: currentColor;\n  cursor: pointer;\n'], ['\n  padding: ', ';\n  border-bottom: 0;\n  display: block;\n  text-decoration: none;\n  color: currentColor;\n  cursor: pointer;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  text-decoration: none;\n  \n  span {\n    margin-left: ', ';\n  }\n'], ['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  text-decoration: none;\n  \n  span {\n    margin-left: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  color: ', ';\n  margin-left: ', ';\n  \n  span {\n    font-weight: 600;\n  }\n'], ['\n  ', '\n  ', '\n  color: ', ';\n  margin-left: ', ';\n  \n  span {\n    font-weight: 600;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  overflow: hidden;\n  line-height: 1.4;\n  height: 2.8rem;\n  margin: ', ';\n  position: relative;\n  overflow: hidden;\n  text-decoration: none;\n  \n  a {\n    color: currentColor;\n  }\n'], ['\n  ', '\n  color: ', ';\n  overflow: hidden;\n  line-height: 1.4;\n  height: 2.8rem;\n  margin: ', ';\n  position: relative;\n  overflow: hidden;\n  text-decoration: none;\n  \n  a {\n    color: currentColor;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ', ';\n  line-height: 1;\n  margin-top: -4px;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ', ';\n  line-height: 1;\n  margin-top: -4px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n'], ['\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  margin-right: ', ';\n  \n  span {\n    color: ', ';\n    background-color: ', ';\n    margin-left: 1px;\n    white-space: nowrap;\n    height: 1rem;\n    line-height: 1rem;\n    padding: ', ';\n  }\n'], ['\n  ', '\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  margin-right: ', ';\n  \n  span {\n    color: ', ';\n    background-color: ', ';\n    margin-left: 1px;\n    white-space: nowrap;\n    height: 1rem;\n    line-height: 1rem;\n    padding: ', ';\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  ', '\n  cursor: pointer;\n  line-height: 1;\n  color: ', ';\n  \n  a {\n    text-decoration: none;\n    color: currentColor;\n  }\n'], ['\n  ', '\n  cursor: pointer;\n  line-height: 1;\n  color: ', ';\n  \n  a {\n    text-decoration: none;\n    color: currentColor;\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  ', '\n  margin: 0.75rem 0 1rem;\n  color: ', ';\n  height: 3.38rem;\n  overflow: hidden;\n  position: relative;\n  \n  &::after {\n  content: \'\';\n    position: absolute;\n    height: 1.125rem;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n'], ['\n  ', '\n  margin: 0.75rem 0 1rem;\n  color: ', ';\n  height: 3.38rem;\n  overflow: hidden;\n  position: relative;\n  \n  &::after {\n  content: \'\';\n    position: absolute;\n    height: 1.125rem;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _polished = require('polished');

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.lowest, neutral.low);

var mainInfo = exports.mainInfo = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(12, 16, 14));

var source = exports.source = (0, _styledComponents.css)(_templateObject3, _typography2.default.mini, neutral.medium, (0, _utils.extRem)(5));

var author = exports.author = (0, _styledComponents.css)(_templateObject4, _typography2.default.mini, (0, _polished.ellipsis)(), neutral.high, (0, _utils.extRem)(8));

var title = exports.title = (0, _styledComponents.css)(_templateObject5, _typography2.default.body, neutral.higher, (0, _utils.extRem)(0, 0, 10));

var secondaryInfo = exports.secondaryInfo = (0, _styledComponents.css)(_templateObject6, (0, _utils.extRem)(0, 16, 10));

var detail = exports.detail = (0, _styledComponents.css)(_templateObject7, neutral.high);

var type = exports.type = (0, _styledComponents.css)(_templateObject8, _typography2.default.mini, (0, _utils.extRem)(8), neutral.lowest, function (props) {
  return props.color;
}, (0, _utils.extRem)(0, 6));

var date = exports.date = (0, _styledComponents.css)(_templateObject9, _typography2.default.mini, neutral.medium);

var abstract = exports.abstract = (0, _styledComponents.css)(_templateObject10, _typography2.default.mini, neutral.medium, (0, _polished.rgba)(neutral.lowest, 0), (0, _polished.rgba)(neutral.lowest, 1));