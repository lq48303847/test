import React from 'react';
import { Select } from 'antd';

export default () => {
  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  return (
    <div style={{ height: 300 }}>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="disabled" disabled>
          Disabled
        </Select.Option>
        <Select.Option value="Yiminghe">yiminghe</Select.Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} disabled>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Select.Option value="lucy">Lucy</Select.Option>
      </Select>
    </div>
  );
};
