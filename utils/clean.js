const fs = require('fs').promises;
const path = require('path');

// Localize the directory
const directory = path.resolve(__dirname, '../dist/');
console.log(directory);

// Removing the files from the directory
fs.rmdir(directory, {
        recursive: true
    })
    .then(() => console.log('directory removed!'));