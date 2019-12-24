exports.config = {
  projectRoot: './src/app',
  routes: {
    '/blog/:name': {
      type: 'json',
      name: {
        url: './routes.json',
        property: 'name'
      }
    }
  }
};
