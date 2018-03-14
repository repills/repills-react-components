'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResourcePreview = require('../ResourcePreview');

var _ResourcePreview2 = _interopRequireDefault(_ResourcePreview);

var _ResourceDetail = require('../ResourceDetail');

var _ResourceDetail2 = _interopRequireDefault(_ResourceDetail);

var _ResourceMiniPreview = require('../ResourceMiniPreview');

var _ResourceMiniPreview2 = _interopRequireDefault(_ResourceMiniPreview);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

var ResourcesListWithDetail = function (_React$Component) {
  _inherits(ResourcesListWithDetail, _React$Component);

  function ResourcesListWithDetail(props) {
    _classCallCheck(this, ResourcesListWithDetail);

    var _this = _possibleConstructorReturn(this, (ResourcesListWithDetail.__proto__ || Object.getPrototypeOf(ResourcesListWithDetail)).call(this, props));

    _this.onHandleDetailView = function (_ref) {
      var reference = _ref.reference;
      var resources = _this.props.resources;

      var currentResource = resources.find(function (e) {
        return e.reference === reference;
      });
      _this.setState({ showDetailModal: true, currentResource: currentResource });
    };

    _this.handleNavigateTo = function (link) {
      return function () {
        return window.open(link, '_blank');
      };
    };

    _this.closeDetailModal = function () {
      return _this.setState({ showDetailModal: false, currentResource: null });
    };

    _this.state = {
      showDetailModal: false,
      currentResource: null
    };
    return _this;
  }

  _createClass(ResourcesListWithDetail, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          resources = _props.resources,
          variant = _props.variant,
          dateType = _props.dateType,
          navigateToSection = _props.navigateToSection,
          navigateToTopic = _props.navigateToTopic;
      var _state = this.state,
          showDetailModal = _state.showDetailModal,
          currentResource = _state.currentResource;


      return _react2.default.createElement(
        _reactContainerQuery.ContainerQuery,
        { query: _breakpoints.query },
        function (params) {
          return _react2.default.createElement(
            BaseStyle,
            null,
            _react2.default.createElement(
              ItemsStyle,
              { className: (0, _classnames2.default)(params) },
              resources.map(function (resource) {
                return _react2.default.createElement(
                  ItemStyle,
                  {
                    className: (0, _classnames2.default)(params),
                    key: resource.link
                  },
                  variant === 'mini' ? _react2.default.createElement(_ResourceMiniPreview2.default, _extends({}, resource, {
                    dateType: dateType,
                    handleDetailView: _this2.onHandleDetailView
                  })) : _react2.default.createElement(_ResourcePreview2.default, _extends({}, resource, {
                    dateType: dateType,
                    handleDetailView: _this2.onHandleDetailView
                  }))
                );
              })
            ),
            _react2.default.createElement(
              _Modal2.default,
              {
                handleClose: _this2.closeDetailModal,
                open: showDetailModal
              },
              currentResource ? _react2.default.createElement(_ResourceDetail2.default, _extends({}, currentResource, {
                navigateTo: _this2.handleNavigateTo(currentResource.link),
                navigateToSection: navigateToSection,
                navigateToTopic: navigateToTopic
              })) : _react2.default.createElement('div', null)
            )
          );
        }
      );
    }
  }]);

  return ResourcesListWithDetail;
}(_react2.default.Component);

ResourcesListWithDetail.propTypes = {
  dateType: _propTypes.string,
  handleDetailView: _propTypes.func,
  navigateToSection: _propTypes.func,
  navigateToTopic: _propTypes.func,
  resources: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_ResourcePreview2.default.propTypes)).isRequired,
  variant: (0, _propTypes.oneOf)(['default', 'mini'])
};
exports.default = ResourcesListWithDetail;