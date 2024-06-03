const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const { name } = require('./package.json');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  filenameHashing:true,
  publicPath:'http://localhost:8080',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      libraryTarget: 'umd',
      filename:'js/[name].[contenthash:8].js',
      library: `${name}`,
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
})
