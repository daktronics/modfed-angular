const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: 'app1',
            remotes: { 'lib': 'lib@http://localhost:4200/remoteEntry.js' }
        })
    ]
}