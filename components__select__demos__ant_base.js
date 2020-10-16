(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    'DPF+': function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('q1tI'),
        n = t.n(l),
        c = t('2fM7');
      a['default'] = () => {
        var e = e => {
          console.log('selected '.concat(e));
        };
        return n.a.createElement(
          'div',
          { style: { height: 300 } },
          n.a.createElement(
            c['a'],
            { defaultValue: 'lucy', style: { width: 120 }, onChange: e },
            n.a.createElement(c['a'].Option, { value: 'jack' }, 'Jack'),
            n.a.createElement(c['a'].Option, { value: 'lucy' }, 'Lucy'),
            n.a.createElement(
              c['a'].Option,
              { value: 'disabled', disabled: !0 },
              'Disabled',
            ),
            n.a.createElement(c['a'].Option, { value: 'Yiminghe' }, 'yiminghe'),
          ),
          n.a.createElement(
            c['a'],
            { defaultValue: 'lucy', style: { width: 120 }, disabled: !0 },
            n.a.createElement(c['a'].Option, { value: 'lucy' }, 'Lucy'),
          ),
          n.a.createElement(
            c['a'],
            { defaultValue: 'lucy', style: { width: 120 }, loading: !0 },
            n.a.createElement(c['a'].Option, { value: 'lucy' }, 'Lucy'),
          ),
        );
      };
    },
  },
]);
