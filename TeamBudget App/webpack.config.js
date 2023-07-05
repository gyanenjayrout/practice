const path = require('path');

module.exports = {
  entry: './budget.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
