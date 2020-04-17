const path = require('path');
const fs = require('fs');

const root = path.join(__dirname, 'public');

const jsFiles = fs.readdirSync(path.join(root, 'js'));

module.exports = {
  entry: jsFiles.map((fileName) => path.join(root, 'js', fileName)),
  output: {
    filename: '[name][hash].js',
    path: path.join(__dirname, 'dist'),
  }
}
