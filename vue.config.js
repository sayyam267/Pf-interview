module.exports = {
    devServer: {
        host: 'localhost',
        https: true
    },
    transpileDependencies: ['vuetify'],
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~@/styles/classes/variables.scss"`
            }
        }
    },

    configureWebpack: config => {
        config.output.filename = '[name].[hash:8].js';
        config.output.chunkFilename = '[name].[hash:8].js';
    },

    chainWebpack: config => {
        ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(match => {
            config.module
                .rule('scss')
                .oneOf(match)
                .use('sass-loader')
                .tap(opt =>
                    Object.assign(opt, {
                        additionalData: `@import '~@/styles/classes/variables.scss';`
                    })
                );
        });

        config.resolve.extensions
            .clear()
            .add('.vue')
            .add('.tsx')
            .add('.ts')
            .add('.mjs')
            .add('.js')
            .add('.jsx')
            .add('.json')
            .add('.wasm');

        // const svgRule = config.module.rule('svg');

        // svgRule.uses.clear();

        // svgRule.use('babel-loader').loader('babel-loader');
        // .end()
        // .use('vue-svg-loader')
        // .loader('vue-svg-loader');

        // svgRule.use('babel-loader').loader('babel-loader');

        // svgRule
        //     .oneOf('inline')
        //     .resourceQuery(/inline/)
        //     .use('vue-svg-loader')
        //     .loader('vue-svg-loader')
        //     .end()
        //     .end()
        //     .oneOf('external')
        //     .use('file-loader')
        //     .loader('file-loader')
        //     .options({
        //         name: 'assets/[name].[hash:8].[ext]'
        //     });
    }
};
