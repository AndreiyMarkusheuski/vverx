const path = require('path');
const merge = require('webpack-merge');

const I18nPlugin = require('i18n-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.base.conf');
const utils = require('./utils');

const localeConfig = utils.getLocales();

module.exports = localeConfig.map(locale => merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(`./public/${locale.code}/`)
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            lang: locale.code,
            filename: 'index.html',
            template: './src/views/index.html',
            favicon: './src/images/favicon.ico',
            locales: localeConfig,
            chunks: ["main", "form", "pace", "fullpage", "menu", "scroll", "swiper"],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new HtmlWebpackPlugin({
            lang: locale.code,
            filename: 'rent-page.html',
            template: './src/views/rent-page.html',
            favicon: './src/images/favicon.ico',
            locales: localeConfig,
            chunks: ["main", "form", "pace", "menu", "scroll"],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new HtmlWebpackPlugin({
            lang: locale.code,
            filename: 'sell-page.html',
            template: './src/views/sell-page.html',
            favicon: './src/images/favicon.ico',
            locales: localeConfig,
            chunks: ["main", "form", "pace", "menu", "scroll"],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new I18nPlugin(locale.config, {
            functionName: 't'
        })
    ]
}));
