'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../utils');

var _basic = require('../Icon/icons/basic');

var _propTypes = require('prop-types');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var SecondaryInfoStyle = _styledComponents2.default.div(_templateObject, _style.secondaryInfo);
var SourceStyle = _styledComponents2.default.a(_templateObject, _style.source);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);
var AuthorStyle = _styledComponents2.default.div(_templateObject, _style.author);
var TypeStyle = _styledComponents2.default.div(_templateObject, _style.type);
var DateStyle = _styledComponents2.default.div(_templateObject, _style.date);
var DetailStyle = _styledComponents2.default.div(_templateObject, _style.detail);
var AbstractStyle = _styledComponents2.default.p(_templateObject, _style.abstract);

var ResourcePreview = function (_React$Component) {
  _inherits(ResourcePreview, _React$Component);

  function ResourcePreview() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResourcePreview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResourcePreview.__proto__ || Object.getPrototypeOf(ResourcePreview)).call.apply(_ref, [this].concat(args))), _this), _this.handleDetailView = function (e) {
      e.preventDefault();
      e.stopPropagation();
      var _this$props = _this.props,
          handleDetailView = _this$props.handleDetailView,
          reference = _this$props.reference;

      handleDetailView({ reference: reference });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResourcePreview, [{
    key: 'shouldComponentUpdate',


    /*
    handleNavigateToDetailPage= e => {
      e.preventDefault();
      e.stopPropagation();
      const {
        slug,
        publishedAt,
        navigateToDetail
      } = this.props;
      navigateToDetail({ slug, publishedAt });
    };
    */

    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.reference !== nextProps.reference) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          abstract = _props.abstract,
          author = _props.author,
          color = _props.color,
          createdAt = _props.createdAt,
          dateType = _props.dateType,
          generateDetailUrl = _props.generateDetailUrl,
          hideAbstract = _props.hideAbstract,
          hideFooter = _props.hideFooter,
          link = _props.link,
          publishedAt = _props.publishedAt,
          slug = _props.slug,
          title = _props.title,
          typeLabel = _props.typeLabel,
          others = _objectWithoutProperties(_props, ['abstract', 'author', 'color', 'createdAt', 'dateType', 'generateDetailUrl', 'hideAbstract', 'hideFooter', 'link', 'publishedAt', 'slug', 'title', 'typeLabel']);

      var MainInfoStyle = (0, _styledComponents2.default)(generateDetailUrl ? 'a' : 'div')(_templateObject, _style.mainInfo);

      return _react2.default.createElement(
        BaseStyle,
        others,
        _react2.default.createElement(
          MainInfoStyle,
          {
            href: generateDetailUrl && generateDetailUrl({ slug: slug, publishedAt: publishedAt }),
            onClick: this.handleDetailView,
            title: title
          },
          _react2.default.createElement(
            TitleStyle,
            null,
            title
          ),
          abstract && !hideAbstract && _react2.default.createElement(
            AbstractStyle,
            null,
            abstract
          ),
          _react2.default.createElement(
            DetailStyle,
            null,
            _react2.default.createElement(
              TypeStyle,
              { color: color },
              _react2.default.createElement(_basic.SquareFilledPillIcon, {
                color: color,
                size: 16
              }),
              _react2.default.createElement(
                'span',
                null,
                typeLabel
              )
            ),
            '\u2013',
            author && _react2.default.createElement(
              AuthorStyle,
              null,
              'by ',
              _react2.default.createElement(
                'span',
                null,
                author
              )
            )
          )
        ),
        !hideFooter && _react2.default.createElement(
          SecondaryInfoStyle,
          null,
          _react2.default.createElement(
            SourceStyle,
            {
              href: link,
              rel: 'nofollow',
              target: '_blank'
            },
            _react2.default.createElement(_basic.LinkIcon, { size: 16 }),
            _react2.default.createElement(
              'span',
              null,
              (0, _utils.getBaseUrl)(link)
            )
          ),
          dateType === 'createdAt' && createdAt && _react2.default.createElement(
            DateStyle,
            null,
            (0, _moment2.default)(createdAt).fromNow()
          ),
          dateType === 'publishedAt' && publishedAt && _react2.default.createElement(
            DateStyle,
            null,
            (0, _moment2.default)(publishedAt).fromNow()
          )
        )
      );
    }
  }]);

  return ResourcePreview;
}(_react2.default.Component);

ResourcePreview.propTypes = {
  abstract: _propTypes.string,
  author: _propTypes.string,
  color: _propTypes.string.isRequired,
  createdAt: _propTypes.string,
  dateType: _propTypes.string,
  generateDetailUrl: _propTypes.func,
  handleDetailView: _propTypes.func,
  hideAbstract: _propTypes.bool,
  hideFooter: _propTypes.bool,
  link: _propTypes.string.isRequired,
  navigateToDetail: _propTypes.func,
  publishedAt: _propTypes.string,
  reference: _propTypes.string,
  slug: _propTypes.string,
  title: _propTypes.string.isRequired,
  typeLabel: _propTypes.string.isRequired
};
ResourcePreview.defaultProps = {
  dateType: 'createdAt'
};


ResourcePreview.displayName = 'ResourcePreview';

exports.default = ResourcePreview;