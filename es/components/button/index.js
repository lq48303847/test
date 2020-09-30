import React from 'react';
import './index.less';
var prefixCls = 'dumi-oni-btn';

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      disabled = _ref.disabled;
  var className = "".concat(prefixCls, " ").concat(prefixCls, "-button ").concat(prefixCls, "-").concat(type);
  return React.createElement("button", {
    className: className,
    onClick: onClick,
    disabled: disabled
  }, children);
};

export default Button;