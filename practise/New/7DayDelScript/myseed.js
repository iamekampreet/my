const fs = require('fs');
const path = require('path');

for (let i = 0; i < 10; i++) {
    fs.writeFile(`./test/test${i}.js`, `//this is a test file number ${i}`, (err) => {
        if (err) {
            console.log('\n\nThis error is from writeFile\n');
        }

        const address = path.join(__dirname, 'test', `test${i}.js`);
        const currentTime = new Date();
        const oneDay = 86400000;

        fs.utimes(address, currentTime, new Date(currentTime - oneDay * i), (err) => {
            if (err) {
                console.log('\n\n This error is from utimes\n', err);
            }
        })
    })

}

