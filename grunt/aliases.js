module.exports = {
  'default': [
    'connect',
    'notify:server',
    'watch'
  ],
  'scripts': [
    'clean:before',
    'browserify',
    'concat',
    'clean:after',
    'notify:scripts'
  ]
};
