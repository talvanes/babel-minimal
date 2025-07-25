module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@': './src',
                    '@root': './src',
                    '@tests': './tests',
                },
            },
        ],
    ],
}
