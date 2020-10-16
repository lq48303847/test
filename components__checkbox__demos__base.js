(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    'UEX+': function(e, a, l) {
      'use strict';
      l.r(a);
      var n = l('q1tI'),
        t = l.n(n),
        r = l('dZyy');
      function u(e) {
        console.log('checked = ', e);
      }
      var p = ['Apple', 'Pear', 'Orange'],
        o = [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ],
        c = [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange', disabled: !1 },
        ];
      a['default'] = () =>
        t.a.createElement(
          t.a.Fragment,
          null,
          t.a.createElement(r['a'].Group, {
            options: p,
            defaultValue: ['Apple'],
            onChange: u,
          }),
          t.a.createElement('br', null),
          t.a.createElement('br', null),
          t.a.createElement(r['a'].Group, {
            options: o,
            defaultValue: ['Pear'],
            onChange: u,
          }),
          t.a.createElement('br', null),
          t.a.createElement('br', null),
          t.a.createElement(r['a'].Group, {
            options: c,
            disabled: !0,
            defaultValue: ['Apple'],
            onChange: u,
          }),
        );
    },
    dZyy: function(e, a, l) {
      'use strict';
      l('q1tI');
      var n = l('kaz8');
      l('tjDI');
      a['a'] = n['a'];
    },
    tjDI: function(e, a, l) {},
  },
]);
