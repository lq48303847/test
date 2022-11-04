/**
 * title: 基本用法
 * desc: 最简单的用法，在浮层中可以选择或者输入日期。
 */
import React, { useCallback } from 'react';
import { Space } from 'antd';
import { DatePicker } from '@liuqiang_90/test';

export default () => {
  const onChange = useCallback(date => {
    console.log(date);
  }, []);
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} mode="time" />
      <DatePicker onChange={onChange} mode="month" />
      <DatePicker onChange={onChange} mode="year" />
    </Space>
  );
};
5;
