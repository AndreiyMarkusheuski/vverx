const path = require("path");
const merge = require("webpack-merge");

const I18nPlugin = require('i18n-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');

const common = require('./webpack.base.conf');
const localeConfig = require('../src/locales/ru.json');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name].js',
        path: path.resolve(`./public`)
    },
    devServer: {
        port: 8080,
        compress: true,
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            lang: 'ru',
            filename: 'index.html',
            template: './src/views/index.html',
            favicon: './src/images/favicon.ico',
            chunks: ["main", "form", "pace", "fullpage", "menu", "scroll", "swiper"],
            locales: []
        }),
        new HtmlWebpackPlugin({
            lang: 'ru',
            filename: 'sell-page.html',
            template: './src/views/sell-page.html',
            favicon: './src/images/favicon.ico',
            chunks: ["main", "form", "pace", "menu", "scroll", "modal"],
            locales: []
        }),
        new HtmlWebpackPlugin({
            lang: 'ru',
            filename: 'rent-page.html',
            template: './src/views/rent-page.html',
            favicon: './src/images/favicon.ico',
            chunks: ["main", "form", "pace", "menu", "scroll", "modal"],
            locales: []
        }),
        new I18nPlugin(localeConfig, {
            functionName: 't'
        }),
        new HtmlWebpackInjector()
    ]
});
