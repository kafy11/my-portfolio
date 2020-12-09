const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    ...withLess({
        lessLoaderOptions: {
            javascriptEnabled: true,
            importLoaders: 0
        },
        cssLoaderOptions: {
            importLoaders: 3,
            localIdentName: '[local]___[hash:base64:5]'
        },
        i18n: {
            locales: ['en', 'pt'],
            defaultLocale: 'pt',
        },
        webpack: (config, { isServer }) => {
            //Make Ant styles work with less
            if (isServer) {
                const antStyles = /antd\/.*?\/style.*?/;
                const origExternals = [...config.externals];
                config.externals = [
                    (context, request, callback) => {
                        if (request.match(antStyles)) return callback();
                        if (typeof origExternals[0] === 'function') {
                            origExternals[0](context, request, callback);
                        } else {
                            callback();
                        }
                    },
                    ...(typeof origExternals[0] === 'function' ? [] : origExternals)
                ];

                config.module.rules.unshift({
                    test: antStyles,
                    use: 'null-loader'
                });
            }
            return config;
        }
    })
});