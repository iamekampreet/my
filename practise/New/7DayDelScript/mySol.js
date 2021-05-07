const fs = require('fs');
const path = require('path');

const add = path.join(__dirname, 'test');

fs.readdir(add, (err, files) => {
    if (err) {
        console.log('\n\nThis error is from readdir', err);
    }

    files.forEach((file) => {
        const address = path.join(add, file);
        const today = new Date();
        const desired = new Date(today - 86400000 * 7);

        fs.stat(address, (err, stats) => {
            if (stats.mtime < desired) {
                fs.unlink(address, () => {
                    console.log('Deleted', file);
                })
            }
        })
    })
})