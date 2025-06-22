// callback-version.js

const fs = require('fs');
const fileName = 'example.txt';

// Write file using callback
fs.writeFile(fileName, 'Hello from callback!', (err) => {
  if (err) {
    return console.error('Error writing file:', err);
  }
  console.log('File written successfully!');

  // Read file using callback
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      return console.error('Error reading file:', err);
    }
    console.log('File content:', data);
  });
});
