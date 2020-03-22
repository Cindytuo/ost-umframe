import pageRoutes from './router.config';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      dynamicImport: {
        webpackChunkName: true,
      },
      title: '',
      dll: true,
      hd: false,
      fastClick: false,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    },
  ],
];
export default {
  base: '/',
  publicPath: './',
  treeShaking: true,
  history: 'browser',
  hash: true,
  ignoreMomentLocale: true,
  routes: pageRoutes,
  plugins,
  extraPostCSSPlugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-px-to-viewport')({
      viewportWidth: 750,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ],
  cssnano: {
    mergeRules: false,
    autoprefixer: true,
  },
  targets: {
    android: 5,
    chrome: 58,
    edge: 13,
    firefox: 45,
    ie: 9,
    ios: 7,
    safari: 10,
  },
  alias: {
    '@': require('path').resolve(__dirname, 'src'),
  },
  // chainWebpack(config, { webpack }) {
  //   config.plugin('bundle').use(require('umi-webpack-bundle-analyzer').BundleAnalyzerPlugin);
  // },
};
