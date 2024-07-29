const fs = require('fs')


const tasks = []

console.log('Start writing your todos')

fs.writeFile('Output.txt', data, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})
