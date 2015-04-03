module.exports = {
  default: {
    src: [
      './src/global.js',
      './src/page.js'
    ],
    options: {
      browserifyOptions: {
        debug: true
      },
      plugin: [
        [
          'factor-bundle', {
            outputs: [
              './assets/global.js',
              './assets/page.js'
            ]
          }
        ]
      ],
    },
    dest: './assets/common.js'
  }
};
