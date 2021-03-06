'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResourcePreview = require('../ResourcePreview');

var _ResourcePreview2 = _interopRequireDefault(_ResourcePreview);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

function ResourcesList(_ref) {
  var resources = _ref.resources,
      dateType = _ref.dateType,
      handleDetailView = _ref.handleDetailView,
      others = _objectWithoutProperties(_ref, ['resources', 'dateType', 'handleDetailView']);

  var count = resources.length;

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        others,
        _react2.default.createElement(
          ItemsStyle,
          {
            breakpointsStatus: params
          },
          resources.map(function (resource) {
            return _react2.default.createElement(
              ItemStyle,
              {
                breakpointsStatus: params,
                count: count,
                key: resource.link
              },
              _react2.default.createElement(_ResourcePreview2.default, _extends({}, resource, {
                dateType: dateType,
                handleDetailView: handleDetailView
              }))
            );
          })
        )
      );
    }
  );
}

ResourcesList.propTypes = {
  dateType: _propTypes.string,
  handleDetailView: _propTypes.func,
  resources: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_ResourcePreview2.default.propTypes)).isRequired
};

exports.default = ResourcesList;