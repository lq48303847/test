/**
 * title: 基本用法
 * desc: 最简单的用法，在浮层中可以选择或者输入日期。
 */

import React from 'react';
import { Space } from 'antd';
import { DatePicker } from 'mid';

export default () => {
  return (
    <Space direction="vertical" size={12}>
      <DatePicker tiemstamp />
      <DatePicker tiemstamp mode="time" />
      <DatePicker tiemstamp mode="month" />
      <DatePicker tiemstamp mode="year" />
    </Space>
  );
};
