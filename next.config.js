const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
}