---
title: DatePicker
group:
  title: 基础组件
---

# DatePicker 日期选择框

基于 Ant Design 的 DatePicker 二次封装

## 代码演示

<code src="./demos/base.jsx" />

<code src="./demos/other.jsx" />

## API

| 参数      | 说明                                            | 类型    | 默认值 |
| --------- | ----------------------------------------------- | ------- | ------ |
| tiemstamp | 控制 value 返回值为时间戳                       | boolean | 无     |
| mode      | 日期面板的状态 time、date、month、year、 decade | string  | 'date' |

** 其他 API[参照](https://ant.design/components/date-picker-cn/) **

## 备注

各种 mode 下数据返回格式：

- year: 'YYYY',
- month: {start_time:'YYYY-MM-DD',end_tiime:'YYYY-MM-DD'},
- date: 'YYYY-MM-DD',
- time: 'YYYY-MM-DD HH:mm:ss',
