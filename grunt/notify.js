module.exports = {
  options: {
    enabled: true,
    max_jshint_notifications: 5,
    success: false,
    duration: 3
  },
  build: {
    options: {
      title: 'Build complete',
      message: 'Tasks finished running.'
    }
  },
  server: {
    options: {
      message: 'Server is ready.'
    }
  },
  scripts: {
    options: {
      message: 'Scripts task finished running.'
    }
  }
};
