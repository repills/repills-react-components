'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('../Icon/icons');

var Icons = _interopRequireWildcard(_icons);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);

var FeatureItem = function FeatureItem(_ref) {
  var description = _ref.description,
      icon = _ref.icon,
      title = _ref.title,
      skin = _ref.skin,
      others = _objectWithoutProperties(_ref, ['description', 'icon', 'title', 'skin']);

  var Icon = Icons[icon + 'Icon'];

  return _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      IconStyle,
      null,
      _react2.default.createElement(Icon, { size: 44 })
    ),
    _react2.default.createElement(
      TitleStyle,
      { skin: skin },
      title
    ),
    description && _react2.default.createElement(DescriptionStyle, {
      dangerouslySetInnerHTML: { __html: description },
      skin: skin
    })
  );
};

FeatureItem.displayName = 'FeatureItem';

FeatureItem.propTypes = {
  description: _propTypes.string,
  icon: _propTypes.string,
  skin: (0, _propTypes.oneOf)(['light', 'dark']),
  title: _propTypes.string
};

FeatureItem.defaultProps = {
  skin: 'light'
};

exports.default = FeatureItem;