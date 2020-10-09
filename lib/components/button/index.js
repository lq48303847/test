'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

require('./index.less');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var prefixCls = 'dumi-oni-btn';

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    disabled = _ref.disabled;
  var className = ''
    .concat(prefixCls, ' ')
    .concat(prefixCls, '-button ')
    .concat(prefixCls, '-')
    .concat(type);
  return _react.default.createElement(
    'button',
    {
      className: className,
      onClick: onClick,
      disabled: disabled,
    },
    children,
  );
};

var _default = Button;
exports.default = _default;
