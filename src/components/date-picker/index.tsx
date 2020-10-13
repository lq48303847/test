import React, { Component } from 'react';
import moment from 'moment';
import * as _ from 'lodash';
import shallowEqual from 'shallowequal';
import { DatePicker } from 'antd';
import { DatePickerProps } from 'antd/lib/date-picker';

export const FORMAT = {
  year: 'YYYY',
  month: 'YYYY-MM',
  date: 'YYYY-MM-DD',
  time: 'YYYY-MM-DD HH:mm:ss',
};

const START_OF = {
  year: 'year',
  month: 'month',
  date: 'date',
  time: 'second',
};

declare type DateRangeValue = {
  start_time: String | undefined;
  end_time: String | undefined;
};

// 时间戳 或者 时间字符串
declare type DateValue = number | DateRangeValue | String | undefined;

declare type PickerProps = {
  // 返回值 为 时间戳
  tiemstamp: boolean;
  // 时间戳 或者 时间字符串
  value: DateValue;
  // 值变更回调
  onChange?: (value: DateValue | null) => void;
};

declare type MidDatePickerProps = PickerProps & DatePickerProps;

class MidDatePicker extends Component<
  MidDatePickerProps,
  { value: DateValue }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: undefined,
    };
  }

  static getDerivedStateFromProps(
    nextProps: MidDatePickerProps,
    prevState: any,
  ) {
    const { value: p_value } = prevState || {};
    const { value, defaultValue } = nextProps || {};
    if ('value' in nextProps && !shallowEqual(value, p_value)) {
      return { value: value || defaultValue || undefined };
    } else {
      return null;
    }
  }

  handleOnChange = (value: moment.Moment | null, dateString: String) => {
    const { mode = 'date', tiemstamp, onChange } = this.props;
    let new_value: DateValue;
    // 转换moment格式类型数据为DateValue
    if (mode === 'month') {
      new_value = value
        ? {
            start_time: `${value.format(FORMAT[mode])}-01`,
            end_time: `${value.format(FORMAT[mode])}-${value.daysInMonth()}`,
          }
        : { start_time: undefined, end_time: undefined };
    } else {
      new_value = !value
        ? undefined
        : tiemstamp
        ? value.startOf(START_OF[mode]).valueOf()
        : value.format(FORMAT[mode] || 'YYYY-MM-DD');
    }

    this.setState({ value: new_value });
    onChange && onChange(new_value);
  };

  //
  render() {
    const { value } = this.state;
    const {
      mode = 'date',
      placeholder = '请选择',
      tiemstamp,
      ...other
    } = this.props;

    const cur_val = _.isObject(value)
      ? value['start_time'] || undefined
      : value;

    const new_value = value
      ? moment(
          tiemstamp && !isNaN(Number(cur_val))
            ? Number(cur_val)
            : new Date(cur_val),
        )
      : undefined;

    const all_props: DatePickerProps = {
      allowClear: false,
      style: { width: '100%' },
      ...other,
      value: new_value,
      placeholder: placeholder,
      onChange: this.handleOnChange,
      onPanelChange: this.handleOnChange,
      format: FORMAT[mode] || 'YYYY-MM-DD',
    };

    if (mode === 'time') {
      all_props['showTime'] = true;
    } else {
      all_props['mode'] = mode;
    }

    return <DatePicker {...all_props} />;
  }
}

export default MidDatePicker;
