'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _antd = require('antd');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * title: 测试名称
 */
var _default = function _default(_ref) {
  var title = _ref.title;
  return _react.default.createElement(
    _antd.Button,
    null,
    title,
    ' \u7EC4\u4EF6\u5F00\u53D1\u6D4B\u8BD5',
  );
};

exports.default = _default;
