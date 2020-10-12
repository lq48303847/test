import 'antd/es/button/style';
import _Button from 'antd/es/button';

/**
 * title: 测试名称
 */
import React, { Fragment } from 'react';
import MyButton from '../components/button';
export default (function(_ref) {
  var title = _ref.title;
  return React.createElement(
    Fragment,
    null,
    React.createElement(MyButton, null, '\u6D4B\u8BD5'),
    React.createElement(
      _Button,
      null,
      title,
      ' \u7EC4\u4EF6\u5F00\u53D1\u6D4B\u8BD5',
    ),
  );
});
