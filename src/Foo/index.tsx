/**
 * title: 测试名称
 */
import React, { Fragment } from 'react';
import { Button } from 'antd';
import MyButton from '@components/button';

export default ({ title }: { title: string }) => (
  <Fragment>
    <MyButton>测试</MyButton>
    <Button>{title} 组件开发测试</Button>
  </Fragment>
);
