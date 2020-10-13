'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.FORMAT = void 0;

require('antd/es/date-picker/style');

var _datePicker = _interopRequireDefault(require('antd/es/date-picker'));

var _react = _interopRequireWildcard(require('react'));

var _moment = _interopRequireDefault(require('moment'));

var _ = _interopRequireWildcard(require('lodash'));

var _shallowequal = _interopRequireDefault(require('shallowequal'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

var FORMAT = {
  year: 'YYYY',
  month: 'YYYY-MM',
  date: 'YYYY-MM-DD',
  time: 'YYYY-MM-DD HH:mm:ss',
};
exports.FORMAT = FORMAT;
var START_OF = {
  year: 'year',
  month: 'month',
  date: 'date',
  time: 'second',
};

var MidDatePicker = /*#__PURE__*/ (function(_Component) {
  _inherits(MidDatePicker, _Component);

  var _super = _createSuper(MidDatePicker);

  function MidDatePicker(props) {
    var _this;

    _classCallCheck(this, MidDatePicker);

    _this = _super.call(this, props);

    _this.handleOnChange = function(value, dateString) {
      var _this$props = _this.props,
        _this$props$mode = _this$props.mode,
        mode = _this$props$mode === void 0 ? 'date' : _this$props$mode,
        tiemstamp = _this$props.tiemstamp,
        onChange = _this$props.onChange;
      var new_value; // 转换moment格式类型数据为DateValue

      if (mode === 'month') {
        new_value = value
          ? {
              start_time: ''.concat(value.format(FORMAT[mode]), '-01'),
              end_time: ''
                .concat(value.format(FORMAT[mode]), '-')
                .concat(value.daysInMonth()),
            }
          : {
              start_time: undefined,
              end_time: undefined,
            };
      } else {
        new_value = !value
          ? undefined
          : tiemstamp
          ? value.startOf(START_OF[mode]).valueOf()
          : value.format(FORMAT[mode] || 'YYYY-MM-DD');
      }

      _this.setState({
        value: new_value,
      });

      onChange && onChange(new_value);
    };

    _this.state = {
      value: undefined,
    };
    return _this;
  }

  _createClass(
    MidDatePicker,
    [
      {
        key: 'render',
        //
        value: function render() {
          var value = this.state.value;

          var _this$props2 = this.props,
            _this$props2$mode = _this$props2.mode,
            mode = _this$props2$mode === void 0 ? 'date' : _this$props2$mode,
            _this$props2$placehol = _this$props2.placeholder,
            placeholder =
              _this$props2$placehol === void 0
                ? '请选择'
                : _this$props2$placehol,
            tiemstamp = _this$props2.tiemstamp,
            other = _objectWithoutProperties(_this$props2, [
              'mode',
              'placeholder',
              'tiemstamp',
            ]);

          var cur_val = _.isObject(value)
            ? value['start_time'] || undefined
            : value;
          var new_value = value
            ? (0, _moment.default)(
                tiemstamp && !isNaN(Number(cur_val))
                  ? Number(cur_val)
                  : new Date(cur_val),
              )
            : undefined;

          var all_props = _objectSpread(
            _objectSpread(
              {
                allowClear: false,
                style: {
                  width: '100%',
                },
              },
              other,
            ),
            {},
            {
              value: new_value,
              placeholder: placeholder,
              onChange: this.handleOnChange,
              onPanelChange: this.handleOnChange,
              format: FORMAT[mode] || 'YYYY-MM-DD',
            },
          );

          if (mode === 'time') {
            all_props['showTime'] = true;
          } else {
            all_props['mode'] = mode;
          }

          return _react.default.createElement(
            _datePicker.default,
            Object.assign({}, all_props),
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
          var _ref = prevState || {},
            p_value = _ref.value;

          var _ref2 = nextProps || {},
            value = _ref2.value,
            defaultValue = _ref2.defaultValue;

          if (
            'value' in nextProps &&
            !(0, _shallowequal.default)(value, p_value)
          ) {
            return {
              value: value || defaultValue || undefined,
            };
          } else {
            return null;
          }
        },
      },
    ],
  );

  return MidDatePicker;
})(_react.Component);

var _default = MidDatePicker;
exports.default = _default;
