'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _basic = require('../Icon/icons/basic');

var _sections = require('../Icon/icons/sections');

var icons = _interopRequireWildcard(_sections);

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var NameStyle = _styledComponents2.default.h3(_templateObject, _style.name);
var SelectionButtonStyle = _styledComponents2.default.div(_templateObject, _style.selectButton);

var SectionPreviewSelection = function (_React$Component) {
  _inherits(SectionPreviewSelection, _React$Component);

  function SectionPreviewSelection(props) {
    _classCallCheck(this, SectionPreviewSelection);

    var _this = _possibleConstructorReturn(this, (SectionPreviewSelection.__proto__ || Object.getPrototypeOf(SectionPreviewSelection)).call(this, props));

    _this.handleOnChange = function () {
      return _this.setState(function (state) {
        var update = { checked: !state.checked };
        _this.props.handleOnChange(update);
        return update;
      });
    };

    _this.state = {
      checked: _this.props.checked
    };
    return _this;
  }

  _createClass(SectionPreviewSelection, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.checked !== this.state.checked) {
        this.setState({ checked: nextProps.checked });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          icon = _props.icon,
          others = _objectWithoutProperties(_props, ['name', 'icon']);

      var checked = this.state.checked;


      var Icon = icons[icon];

      return _react2.default.createElement(
        BaseStyle,
        _extends({}, others, {
          checked: checked,
          onClick: this.handleOnChange
        }),
        _react2.default.createElement(
          IconStyle,
          {
            checked: checked
          },
          _react2.default.createElement(Icon, {
            size: 60
          })
        ),
        _react2.default.createElement(
          NameStyle,
          null,
          name
        ),
        _react2.default.createElement(
          SelectionButtonStyle,
          null,
          checked ? _react2.default.createElement(_basic.CheckedIcon, {
            color: checked ? _theme2.default.palettes.status.ok : null,
            size: 20
          }) : _react2.default.createElement(_basic.AddIcon, { size: 20 }),
          _react2.default.createElement(
            'span',
            null,
            checked ? 'Section selected' : 'Select section'
          )
        )
      );
    }
  }]);

  return SectionPreviewSelection;
}(_react2.default.Component);

SectionPreviewSelection.displayName = 'SectionPreviewSelection';

SectionPreviewSelection.propTypes = {
  checked: _propTypes.bool,
  color: _propTypes.string.isRequired,
  handleOnChange: _propTypes.func,
  icon: _propTypes.string.isRequired,
  name: _propTypes.string.isRequired
};

exports.default = SectionPreviewSelection;