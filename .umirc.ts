import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: '中台组件库',
  favicon: '/assets/favicon.ico',
  logo: '/assets/favicon.png',
  // 部署到Github上
  base: '/test',
  publicPath: './',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  alias: {
    '@utils': resolve(__dirname, './src/utils'),
    '@components': resolve(__dirname, './src/components'),
  },
});
