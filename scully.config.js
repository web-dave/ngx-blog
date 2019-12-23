exports.config = {
  projectRoot: './src/app',
  routes: {
    '/blog/:name': {
      type: 'json',
      url: './routes.json',
      property: 'name'
    }
  }
};
