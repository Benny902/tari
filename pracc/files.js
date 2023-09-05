const fs = require('fs');  // file system


//// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line'); // executes before the upper finishes


//// writing files
// fs.writeFile('./docs/blog1.txt', 'Hello world', () => {
//     console.log('file was written');
// });
// fs.writeFile('./docs/blog2.txt', 'Hello again', () => {
//     console.log('file was written');
// });


//// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}



//// deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}