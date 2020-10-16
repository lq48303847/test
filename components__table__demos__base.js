(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12],
  {
    CEFc: function(e, a, t) {},
    uocA: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('q1tI'),
        r = t.n(n),
        l = t('mr32'),
        d = t('zeV3'),
        o = t('wHck'),
        s = [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: e => r.a.createElement('a', null, e),
          },
          { title: 'Age', dataIndex: 'age', key: 'age' },
          { title: 'Address', dataIndex: 'address', key: 'address' },
          {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: e =>
              r.a.createElement(
                r.a.Fragment,
                null,
                e.map(e => {
                  var a = e.length > 5 ? 'geekblue' : 'green';
                  return (
                    'loser' === e && (a = 'volcano'),
                    r.a.createElement(
                      l['a'],
                      { color: a, key: e },
                      e.toUpperCase(),
                    )
                  );
                }),
              ),
          },
          {
            title: 'Action',
            key: 'action',
            render: (e, a) =>
              r.a.createElement(
                d['b'],
                { size: 'middle' },
                r.a.createElement('a', null, 'Invite ', a.name),
                r.a.createElement('a', null, 'Delete'),
              ),
          },
        ],
        c = [
          {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          },
        ];
      a['default'] = () =>
        r.a.createElement(o['a'], { columns: s, dataSource: c });
    },
    wHck: function(e, a, t) {
      'use strict';
      t('q1tI');
      var n = t('wCAj');
      t('CEFc');
      a['a'] = n['a'];
    },
  },
]);
