export default {
  esm: {
    type: 'babel',
  },
  cjs: {
    type: 'babel',
    minify: true,
    lazy: true,
  },
  // umd: {
  //   sourcemap: true,
  // },
  extraBabelPlugins: [

  ]
};
