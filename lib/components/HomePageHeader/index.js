'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _basic = require('../Icon/icons/basic');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var PillsAnimationStyle = _styledComponents2.default.div(_templateObject, _style.pillsAnimation);
var PillStyle = _styledComponents2.default.div(_templateObject, _style.pill);
var TitleStyle = _styledComponents2.default.h1(_templateObject, _style.title);
var SubTitleStyle = _styledComponents2.default.div(_templateObject, _style.subTitle);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);

var HomePageHeader = function HomePageHeader(_ref) {
  var description = _ref.description,
      subTitle = _ref.subTitle,
      title = _ref.title;


  return _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(
      PillsAnimationStyle,
      null,
      [1, 2, 3].map(function (i) {
        return _react2.default.createElement(
          PillStyle,
          {
            index: i,
            key: 'pill-' + i
          },
          _react2.default.createElement(_basic.SquarePillIcon, { size: i === 2 ? 100 : 60 })
        );
      })
    ),
    _react2.default.createElement(
      TitleStyle,
      null,
      title
    ),
    subTitle && _react2.default.createElement(
      SubTitleStyle,
      null,
      subTitle
    ),
    description && _react2.default.createElement(
      DescriptionStyle,
      null,
      description
    )
  );
};

HomePageHeader.propTypes = {
  description: _propTypes.string,
  subTitle: _propTypes.string,
  title: _propTypes.string
};

exports.default = HomePageHeader;