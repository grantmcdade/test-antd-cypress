const {
  override,
  removeModuleScopePlugin,
  fixBabelImports,
  getBabelLoader,
  babelExclude,
  addBabelPlugin,
} = require('customize-cra');
const path = require('path');

const addCommon = config => {
  const loader = getBabelLoader(config, false);
  const sharedPath = path
    .normalize(path.join(process.cwd(), '../shared'))
    .replace(/\\/g, '\\');
  loader.include = [loader.include, sharedPath];
  return config;
};

module.exports = override(
  addCommon,
  addBabelPlugin('@babel/plugin-proposal-optional-chaining'),
  addBabelPlugin('istanbul'),
  removeModuleScopePlugin(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  babelExclude([path.resolve('../shared/node_modules')]),
);
