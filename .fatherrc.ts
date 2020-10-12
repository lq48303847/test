export default {
  esm: {
    type: 'babel',
  },
  cjs: {
    type: 'babel',
  },
  extraBabelPlugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@utils': './src/utils',
          '@components': './src/components',
        },
      },
    ],
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
