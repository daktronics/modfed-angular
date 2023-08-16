const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: 'lib',
            filename: 'remoteEntry.js',
            exposes: {
                'module': 'projects/lib/src/app/lib.module'
            }
        })
    ]
}