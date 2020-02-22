/**
 * Custom angular webpack configuration
 */

module.exports = (config, options) => {
    config.target = 'electron-renderer';
    if (options.customWebpackConfig.target) {
        config.target = options.customWebpackConfig.target;
    } else if (options.fileReplacements) {
        for(let fileReplacement of options.fileReplacements) {
            if (fileReplacement.replace !== 'src/environments/environment.ts') {
                continue;
            }

            let fileReplacementParts = fileReplacement['with'].split('.');
            if (['dev', 'prod', 'test', 'electron-renderer'].indexOf(fileReplacementParts[1]) < 0) {
                config.target = fileReplacementParts[1];
            }
            break;
        }
    }

    const tailwindRule =
        {
            test: /\.scss$/,
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                syntax: 'postcss-scss',
                plugins: () => [
                    require('postcss-import'),
                    require('tailwindcss'),
                    require('autoprefixer'),
                ]
            }
        }
    ;

    config.module.rules = [...config.module.rules, tailwindRule]

    // console.log(config);
    return config;
}
