(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8, 7],
  {
    '/zbI': function(e, n, a) {
      'use strict';
      a.r(n);
      var l = a('0Owb'),
        t = a('q1tI'),
        r = a.n(t),
        u = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        o = a.n(u),
        c = r.a.memo(function() {
          var e = a('K+nK'),
            n = e(a('q1tI')),
            l = e(a('UEX+')),
            t = function() {
              return n['default'].createElement(l['default'], null);
            };
          return n['default'].createElement(t);
        });
      n['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement('div', { className: 'markdown' }),
          r.a.createElement(
            o.a,
            Object(l['a'])(
              {
                source: {
                  jsx:
                    "import { Checkbox } from '@liuqiang_90/test';\n\nfunction onChange(checkedValues) {\n  console.log('checked = ', checkedValues);\n}\n\nconst plainOptions = ['Apple', 'Pear', 'Orange'];\nconst options = [\n  { label: 'Apple', value: 'Apple' },\n  { label: 'Pear', value: 'Pear' },\n  { label: 'Orange', value: 'Orange' },\n];\nconst optionsWithDisabled = [\n  { label: 'Apple', value: 'Apple' },\n  { label: 'Pear', value: 'Pear' },\n  { label: 'Orange', value: 'Orange', disabled: false },\n];\nexport default () => (\n  <>\n    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />\n    <br />\n    <br />\n    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />\n    <br />\n    <br />\n    <Checkbox.Group\n      options={optionsWithDisabled}\n      disabled\n      defaultValue={['Apple']}\n      onChange={onChange}\n    />\n  </>\n);",
                },
              },
              {
                path: '/_demos/base',
                dependencies: { '@liuqiang_90/test': '1.0.1' },
                files: {},
              },
            ),
            r.a.createElement(c, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'select' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#select' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Select',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u53c2\u6570'),
                  r.a.createElement('th', null, '\u63cf\u8ff0'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'value'),
                  r.a.createElement('td', null, '\u9009\u9879\u503c.'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onChange'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u503c\u6539\u53d8\u540e\u7684\u56de\u8c03\u51fd\u6570',
                  ),
                ),
              ),
            ),
          ),
        );
      };
    },
    '0Owb': function(e, n, a) {
      'use strict';
      function l() {
        return (
          (l =
            Object.assign ||
            function(e) {
              for (var n = 1; n < arguments.length; n++) {
                var a = arguments[n];
                for (var l in a)
                  Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      a.d(n, 'a', function() {
        return l;
      });
    },
    'K+nK': function(e, n) {
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = a;
    },
    'UEX+': function(e, n, a) {
      'use strict';
      a.r(n);
      var l = a('q1tI'),
        t = a.n(l),
        r = a('dZyy');
      function u(e) {
        console.log('checked = ', e);
      }
      var o = ['Apple', 'Pear', 'Orange'],
        c = [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ],
        p = [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange', disabled: !1 },
        ];
      n['default'] = () =>
        t.a.createElement(
          t.a.Fragment,
          null,
          t.a.createElement(r['a'].Group, {
            options: o,
            defaultValue: ['Apple'],
            onChange: u,
          }),
          t.a.createElement('br', null),
          t.a.createElement('br', null),
          t.a.createElement(r['a'].Group, {
            options: c,
            defaultValue: ['Pear'],
            onChange: u,
          }),
          t.a.createElement('br', null),
          t.a.createElement('br', null),
          t.a.createElement(r['a'].Group, {
            options: p,
            disabled: !0,
            defaultValue: ['Apple'],
            onChange: u,
          }),
        );
    },
    dZyy: function(e, n, a) {
      'use strict';
      a('q1tI');
      var l = a('kaz8');
      a('tjDI');
      n['a'] = l['a'];
    },
    tjDI: function(e, n, a) {},
  },
]);
