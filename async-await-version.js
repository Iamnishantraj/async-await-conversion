// async-await-version.js

const fs = require('fs/promises'); // Use promise-based fs
const fileName = 'example.txt';

async function handleFile() {
  try {
    await fs.writeFile(fileName, 'Hello from async/await!');
    console.log('File written successfully!');

    const data = await fs.readFile(fileName, 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error handling file:', err);
  }
}

handleFile();
