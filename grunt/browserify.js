module.exports = {
  default: {
    src: [
      './src/global.js',
      './src/page1.js',
      './src/page2.js'
    ],
    dest: './assets/common.js',
    options: {
      plugin: [
        [
          'factor-bundle', {
            outputs: [
              './assets/global.js',
              './assets/page1.js',
              './assets/page2.js'
            ]
          }
        ]
      ],
    }
  }
};
