const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false,
    assetsDir: 'assets',
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = '緯創';
            return args;
        });

        config.optimization.minimizer('terser').tap((args) => {
            args[0].terserOptions.output = {
                ...args[0].terserOptions.output,
                comments: false, // exclude all comments from output
            };
            return args;
        });
        // 先刪除預設的svg配置
        config.module.rules.delete('svg');
        // 新增 svg-sprite-loader 設定
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/assets/icon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: '[name]' });
        // 修改 images-loader 配置
        config.module
            .rule('images')
            .exclude.add(resolve('src/assets/icon'));
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        }
    },
};